// JavaScript File

$( document ).ready(function() {
    $("#sakura").click(function(){
    for(var count = 0; count < 2; count = count +1){
        $("body").append('<img src="http://jpninfo.com/wp-content/uploads/2016/02/sakura-river.jpg">');
    }
});
$("#yes").click(function(){
    $("#answer").html("I knew it! Everyone love ScriptEd!");
});
$("#no").hover(function() {
  $("#no").animate({
    top: "400px"
  });
  $("#no").animate({
    top: "0"
  });
});
});
