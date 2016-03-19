/**
 * Created by jinpeiqi on 2016/3/19.
 */
/*$(function () {
    $("#playing_button").click(
        function(){
            $("#player").get(0).play();
        }
    );
    $("#stop_button").click(
        function(){
            $("#player").get(0).pause();
        }
    );
});*/
$("#pause_button").hide();
var audio;
audio=new Audio("scr/music/1.mp3");

$("#playing_button").click(function(){
    audio.play();
    $("#playing_button").hide();
    $("#pause_button").show();

});

$("#pause_button").click(function(){
    audio.pause();
       $("#pause_button").hide();
       $("#playing_button").show();
});

$("#stop_button").click(function(){
    audio.pause();
    audio.currentTime=0;
    //audio.load();//fuck chrome
    $("#pause_button").hide();
    $("#playing_button").show();
});

$("#forward_button").click(function(){
    alert(audio.currentTime);
    });
$("#music_1").click(function(){
    audio.pause();
    audio.currentTime=0;
    //audio.load();//fuck chrome
    $("#pause_button").hide();
    $("#playing_button").show();
    audio=new Audio("scr/music/1.mp3");
    audio.play();
    $("#playing_button").hide();
    $("#pause_button").show();
});
$("#music_2").click(function(){
    audio.pause();
    audio.currentTime=0;
    //audio.load();//fuck chrome
    $("#pause_button").hide();
    $("#playing_button").show();
    audio=new Audio("scr/music/2.mp3");
    audio.play();
    $("#playing_button").hide();
    $("#pause_button").show();
});

function ProgressBar(){

}