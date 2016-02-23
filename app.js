//module
var robotApp = angular.module('robotApp', ['ngRoute', 'robotCtrls']);

//controllers
var robotCtrls = angular.module('robotCtrls', []);

robotCtrls.controller('armDetailCtrl', ['$scope', function($scope){
  $scope.robot = {
    "id": "Barber Bot",
    "body"          : "robots/img/head-body-saucer.svg",
    "arm.1"         : {
      "img"         : "../robots/img/arm%20-%20bristles.svg",
      "description" : "This arm is all bristley and will whisk your clippings away in no time flat."
    },
    "arm.2"         : {
      "img"         : "../robots/img/arm%20-%20clippers.svg",
      "description" : "This arm is all clippery and will cut your clippings away in no time flat."
    },
    "arm.3"         : {
      "img"         : "../robots/img/arm%20-%20comb.svg",
      "description" : "This arm is all comby and will comb your clippings away in no time flat."
    },
    "arm.4"         : {
      "img"         : "../robots/img/arm%20-%20scissors.svg",
      "description" : "This arm is all scissory and will cut your clippings away in no time flat."
    },
    "duties"        : "Barber Bot will cut your hair. And (s)he floats. So yes. (S)He'll cut you're hair form way up there!"
  };
}]);

//routes
robotApp.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/pages/home.html',
      controller: 'armDetailCtrl'
    })

});

