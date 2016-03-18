var app = angular.module("myApp", ["ngRoute"])
    .controller("myController", function($scope) {
        var Carousel_1=
            {
                name:"Angular Js",
                picture:"scr/pic/angularjs.png",
                width:"900",
                height:"525",
                introduction:"AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. Angular's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology."

            };
        var Carousel_2=
            {
                name:"Bootstrap",
                picture:"scr/pic/bootstrap.png",
                width:"900",
                height:"525",
                introduction:"Bootstrap is the most popular HTML, CSS, and JS framework for developing responsive, mobile first projects on the web."
            };
        var Carousel_3=
            {
                name:"JQuery",
                picture:"scr/pic/Jquery.png",
                width:"900",
                height:"525",
                introduction:"Query is a fast, small, and feature-rich JavaScript library. It makes things like HTML document traversal and manipulation, event handling, animation, and Ajax much simpler with an easy-to-use API that works across a multitude of browsers. With a combination of versatility and extensibility, jQuery has changed the way that millions of people write JavaScript."
            };
        $scope.Carousel_1=Carousel_1;
        $scope.Carousel_2=Carousel_2;
        $scope.Carousel_3=Carousel_3;

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
    });
