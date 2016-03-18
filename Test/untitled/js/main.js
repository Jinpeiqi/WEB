var myApp = angular
    .module("myModule",[])
    .filter("gender",function(){
        return function (gender) {
            switch (gender){
                case "male" :
                    return 1;
                case "female":
                    return 2;
            }
        }})
    .controller("simplecontroller", function simplecontroller($scope){
        $scope.customers = [
            { name:"Dave Jones", city:"Phoenix"},
            { name:"Jamie Riley", city:"Atlanta"},
            { name:"Jin Peiqi", city:"NanJing"},
            {name:"Heedy Wahlin", city:"Chandler"}
        ]
    })
    .controller("myController",function($scope){
        var a="JinPeiqi";
        var employee = {
            firstName:a,
            lastName:"Hastings",
            gender : "Male"
        };
        $scope.employee =  employee;
        var picture = {
            Name : "Jiang",
            Year : "1989",
            flag :"scr/pic/1.jpg"
        };
        $scope.picture = picture;
        var message="Hello Angular";
        $scope.message = message;
        var countries =
            [
                {
                    name :"UK",
                    cities : [
                        {name:"London"},
                        {name:"Mancheste"},
                        {name:"Birmingham"}
                    ]
                },
                {
                    name:"USA",
                    cities:[
                        {name:"Los Angeles"},
                        {name:"Chicage"},
                        {name:"Houston"}
                    ]
                },
                {
                    name: "India",
                    cities: [
                        {name: "Hyderabad"},
                        {name: "Chennai"},
                        {name: "Mumbai"}
                    ]
                }
            ];
        $scope.countries=countries;

        var technologies =[
            { name:"C#",like:0,dislike:0},
            { name:"C++",like:0,dislike:0},
            { name:"JAVA",like:0,dislike:0},
            { name:"JAVASCRIPT",like:0,dislike:0}
        ];
        $scope.technologies=technologies;
        $scope.Like=function(technologies){
            technologies.like++;
        };
        $scope.Dislike=function(technologies){
            technologies.dislike++;
        };

        var salary =[
            {name:"jinpeiqi",gender:"male",salary:"5000"},
            {name:"jinpeiqi1",gender:"male",salary:"2000"},
            {name:"jinpeiqi2",gender:"male",salary:"3000"},
            {name:"jinpeiqi3",gender:"male",salary:"4000"}
        ];
        $scope.salary=salary;
        $scope.sortcolumn="name";
        $scope.reverseSort=false;
        $scope.sortData=function(column){
            if($scope.sortcolumn=="column"){
                $scope.reverseSort=true;
            }else {
                $scope.reverseSort=false;
            }
            $scope.sortcolumn=column;
        };
        var music={
            name:"1",
            scr:"scr/media/1.mp3"
        };
        $scope.music=music;

    });


