// JavaScript File

$( document ).ready(function() {
    $("#sakura").click(function(){
    for(var count = 0; count < 5; count = count + 1){
        $("p").append('<img src="https://i.ytimg.com/vi/dCTpZcMZz4M/maxresdefault.jpg">');
    }
});
$("question").click(function(){
    var answer = $("#answer").val();
    if ( answer==="Sakura"){
        $("body").html("Correct!");
    }else if ( answer==="sakura"){
        $("body").html("Correct!");
    } else {
        $("body").html("Incorrect!!!");
    }
});

});
