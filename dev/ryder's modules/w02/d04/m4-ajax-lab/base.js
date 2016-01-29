var weekly_quakes_endpoint = "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson"

var earthquakeData; 

$(document).ready(function(){
	console.log("ready");
	$.ajax({
		type: "GET",
		url: "http://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/significant_week.geojson",
		dataType: "json",
		success: function(data){
			earthquakeData = data;
			addTitles();
			
		}

	});

  	map = new google.maps.Map(document.getElementById('map'), {
  		center: {lat: 0, lng: 0},
  		zoom: 0
  	});
});

function addTitles(){
	for (i=0;i<earthquakeData.features.length;i++){
		var earthquake = earthquakeData.features[i];
		var title = earthquake.properties.title;
		$("#info").append(title);
	}
}