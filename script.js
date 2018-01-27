var topics = ["topic1","topic2", "topic3"];
function createbutton(topic){
	var buttonDiv = $("#buttons-list");
	var newbutton=$("<button>").text(topic).addClass("btn btn-link topic");
	buttonDiv.append(newbutton);
}
topics.forEach(createbutton);
$(".topic").on("click",function(){
	$("body").append($(this).text())
})
$("#submit").on("click",function(){
	newTopic=$("#newTopic").val()
	topics.push(newTopic);
	createbutton(newTopic);
	$("#newTopic").val("");
})