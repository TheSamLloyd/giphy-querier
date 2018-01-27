var topics = ["topic1","topic2", "topic3"];
function createbutton(topic){
	var buttonDiv = $("#buttons-list");
	var newbutton=$("<button>").text(topic).addClass("btn btn-outline-primary topic ");
	buttonDiv.append(newbutton);
}
topics.forEach(createbutton);

$("#buttons-list").on("click",".topic",function(){
	console.log($(this).text())
	$("#gifdiv").empty();
	var query = $(this).text();
	var queryURL="https://api.giphy.com/v1/gifs/search?q=" + encodeURI(query) + "&api_key=dc6zaTOxFJmzC&limit=10&rating=pg";
	$.ajax({
		url:queryURL,
		method: "GET"
	})
	.then(function(response){
		var results = response.data;
		console.log(results[0]);
		for (var i=0;i<results.length;i++){
			var gifDiv = $("#gifdiv");
			var rating = results[i].rating;
			var p = $("<p>").text("Rating: "+rating);
			var img = $("<img>").attr("src",results[i].images.fixed_height_still.url).attr("altsrc",results[i].images.fixed_height.url).addClass("gif");
			gifDiv.append(p);
			gifDiv.append(img);
		}
	})
})
$("#submit").on("click",function(){
	newTopic=$("#newTopic").val()
	topics.push(newTopic);
	createbutton(newTopic);
	$("#newTopic").val("");
})
$("#gifdiv").on("click",".gif",function(){
	var cURL = $(this).attr("src");
	var altURL = $(this).attr("altsrc");
	$(this).attr("src",altURL).attr("altsrc",cURL);
})