// JavaScript File

$( document ).ready(function() {
    $("#sakura").click(function(){
    for(var count = 0; count < 1; count = count ++){
        $("body").append('<img src="https://i.ytimg.com/vi/dCTpZcMZz4M/maxresdefault.jpg">');
    }
});
$("#yes").click(function(){
    $("#answer").append("I knew it! Everyone love ScriptEd!");
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
