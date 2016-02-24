//module
var robotApp = angular.module('robotApp', ['ngRoute', 'robotCtrls']);

//controllers

var robotCtrls = angular.module('robotCtrls', []);

robotCtrls.controller('armDetailCtrl', ['$scope', function($scope){
  $scope.robots = [{
    "id": "Barber Bot",
    "body"          : "robots/img/head-body-saucer.svg",
    "arm.1"         : {
      "id"          : "Arm One",
      "img"         : "../robots/img/arm%20-%20bristles.svg",
      "description" : "This arm is all bristley and will whisk your clippings away in no time flat."
    },
    "arm.2"         : {
      "id"          : "Arm Two",
      "img"         : "../robots/img/arm%20-%20clippers.svg",
      "description" : "This arm is all clippery and will cut your clippings away in no time flat."
    },
    "arm.3"         : {
      "id"          : "Arm Three",
      "img"         : "../robots/img/arm%20-%20comb.svg",
      "description" : "This arm is all comby and will comb your clippings away in no time flat."
    },
    "arm.4"         : {
      "id"          : "Arm Four",
      "img"         : "../robots/img/arm%20-%20scissors.svg",
      "description" : "This arm is all scissory and will cut your clippings away in no time flat."
    },
    "duties"        : "Barber Bot will cut your hair. And (s)he floats. So yes. (S)He'll cut you're hair form way up there!"
  },
  {
    "id": "Box Bot",
    "body"          : "robots/img/box-head-green.svg",
    "arm.1"         : {
      "id"          : "Arm One",
      "img"         : "../robots/img/box-orange.svg",
      "description" : "This arm is orange. I am a box."
    },
    "arm.2"         : {
      "id"          : "Arm Two",
      "img"         : "../robots/img/box-purple.svg",
      "description" : "This arm is purple. Iam a box."
    },
    "arm.3"         : {
      "id"          : "Arm Three",
      "img"         : "../robots/img/box-pink.svg",
      "description" : "This arm is pink. I am a box."
    },
    "arm.4"         : {
      "id"          : "Arm Four",
      "img"         : "../robots/img/box-teal.svg",
      "description" : "This arm is teal. I am a box."
    },
    "duties"        : "Box bot is a box. He sure is boxy!!!"
  }];
}]);

//routes
robotApp.config(function($routeProvider){

  $routeProvider
    .when('/robot-list', {
      templateUrl: '/pages/robot.html',
      controller: 'armDetailCtrl'
    })
    .when('/', {
      templateUrl: '/pages/home.html'
    })
    .when('/robot-details', {
      templateUrl: '/pages/details.html',
    })

});

