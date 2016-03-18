/**
 * Created by jinpeiqi on 2016/3/12.
 */
$(function(){

    $(".btn-primary").on("click",function(){
        var panelId = $(this).attr('date-panelid');
        $("#"+panelId).toggle(300);

    });

        $(".btn-success").on("mouseover", function () {
            if($("#myswitch").prop("checked")) {
                var panelId2 = $(this).attr("date-panedil2");
                $("#" + panelId2).slideToggle(300);
            }
        });
});

$(function(){
    $("li").on("click",function(){
        $(this).removeClass("special");
       $(this).siblings().addClass("special");
    });
});
//Call Back Function
$(function(){
    $(".tab-panels .tabs li").on("click",function(){
        var panel = $(this).closest(".tab-panels");
        panel.find(".tabs li.active").removeClass("active");
        $(this).addClass("active");
        //figure out which panel to show
        var panelToShow =$(this).attr("rel");

        // hide current panel
     /*  $(".tab-panels .panel.active").slideUp(300,function(){ //doing something after slideUp function
           $(this).removeClass("active");
           $("#"+panelToShow).slideDown(300,function(){
               $(this).addClass("active");
           });
       });*/

        panel.find(".panel.active").slideUp(300,showNextPanel);

        function showNextPanel(){ //doing something after slideUp function
            $(this).removeClass("active");
            $("#"+panelToShow).slideDown(300,function(){
                $(this).addClass("active");
            });
        }

        //show new panel
    });
});

$(function () {
   setInterval(function (){
       $("#currentTime").text(new Date().toLocaleTimeString());
   },1000 );
});

/*$(function() {

    //settings for slider
    var width = 720;
    var animationSpeed = 1000;
    var pause = 3000;
    var currentSlide = 1;

    //cache DOM elements
    var $slider = $('#slider');
    var $slideContainer = $('.slides', $slider);
    var $slides = $('.slide', $slider);

    var interval;

    function startSlider() {
        interval = setInterval(function() {
            $slideContainer.animate({'margin-left': '-='+width}, animationSpeed, function() {
                if (++currentSlide === $slides.length) {
                    currentSlide = 1;
                    $slideContainer.css('margin-left', 0);
                }
            });
        }, pause);
    }
    function pauseSlider() {
        clearInterval(interval);
    }

    $slideContainer
        .on('mouseenter', pauseSlider)
        .on('mouseleave', startSlider);

    startSlider();


});*/
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