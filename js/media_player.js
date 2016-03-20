/**
 * Created by jinpeiqi on 2016/3/19.
 */
$(function(){
    var status=true;
    $("#sidebar").click(function(){
        if(status==true) {
            $("#sidebar").animate({marginLeft: "-180px"});
            status=false;
        }else {
            $("#sidebar").animate({marginLeft: "0px"});
            status=true
        }

    });
});
