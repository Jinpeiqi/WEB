/**
 * Created by jinpeiqi on 2016/3/19.
 */
$(function () {
    $("#playing_button").click(
        function(){
            $("#player").get(0).play();
        }
    )
    $("#stop_button").click(
        function(){
            $("#player").get(0).pause();
        }
    )
});