


window.onload = function(){
	var posts = [];

	if(window.localStorage.getItem("blogPosts")){
		try{
			posts = JSON.parse(window.localStorage.getItem("blogPosts"));
			for(var i = 0; i < posts.length; i++){
				$("#blogPosts").append($("<li>").append(posts[i]));
			}
		}
		catch(err){
			console.log('error');
		}
	}

	function preventDefault(e){
		e.preventDefault();
	}
	
	function postInfo(){
		var infoValue = $("#info").val();
		var blogPost = $("<li>").text(infoValue);
		$("#blogPosts").append(blogPost);
		posts.push(infoValue);
		window.localStorage.setItem("blogPosts", JSON.stringify(posts));



	}

	$("#form").on("submit", function(e){
		e.preventDefault();

		postInfo();
		$("#info").val("");
	});


};
  		