var app = angular.module("myApp", ["ngRoute"])
    .controller("myController", function($scope) {
        var Carousel_1 =
        {
            name: "Angular Js",
            picture: "scr/pic/angularjs.png",
            width: "900",
            height: "525",
            introduction: "AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology."

        };
        var Carousel_2 =
        {
            name: "Bootstrap",
            picture: "scr/pic/bootstrap.png",
            width: "900",
            height: "525",
            introduction: "Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."
        };
        var Carousel_3 =
        {
            name: "JQuery",
            picture: "scr/pic/Jquery.png",
            width: "900",
            height: "525",
            introduction: "Query is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
        };
        $scope.Carousel_1 = Carousel_1;
        $scope.Carousel_2 = Carousel_2;
        $scope.Carousel_3 = Carousel_3;


    })
    .controller("AudioController",function($scope,$interval){
        //----------------------Audio Player-------------------

        $("#pause_button").hide();
        var music = [{
            name: "music_1",
            author: "Jinpeiqi",
            time: "4:17",
            scr: "scr/music/1.mp3"
        }, {
            name: "music_2",
            author: "Jinpeiqi",
            time: "5:19",
            scr: "scr/music/2.mp3"
        }];
        var audio_url;
        audio_url=music[0].scr;
        $scope.audio_url=audio_url;
        $scope.music = music;
        var audio;
        audio=new Audio(audio_url);
        var current_time=audio.currentTime;
        $interval(function(){
            $scope.current_time=audio.currentTime;
        },1000);
         $scope.play_audio=function(music) {
            alert(audio.duration);
            audio.pause();
            //audio.load();//fuck chrome
            $scope.audio_url=music.scr;
            $("#pause_button").hide();
            $("#playing_button").show();
            audio=new Audio(music.scr);
            audio.play();
            $("#playing_button").hide();
            $("#pause_button").show();
          };
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
            alert(audio.duration);
            //audio.load();//fuck chrome
            $("#pause_button").hide();
            $("#playing_button").show();
        });
    })
    .config(function($routeProvider){
        $routeProvider
            .when("/home",{
                templateUrl:"Templates/home.html",
                controller:"myController"
            })
            .when("/music",{
                templateUrl:"Templates/Music.html",
                controller:"myController"
            })
            .when("/",{
                templateUrl:"Templates/home.html",
                controller:"myController"
            })
    });
