//module
var robotApp = angular.module('robotApp', ['ngRoute', 'robotCtrls']);

//directive

angular.module('robotApp')
.directive('robotIdSelect', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    // scope: {}, // {} = isolate, true = child, false/undefined = no change
    controller: function($scope, $element, $attrs, $transclude) {
      this.setActiveRobot = function(robot)
    },
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'templates/directives/robot-id-select.html',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {
      robotId.all().then(function(robotData){
        $scope.robots = robotData;
      });
    }
  };
});

angular.module('robotApp')
.directive('robotIdItem', function(){
  // Runs during compile
  return {
    // name: '',
    // priority: 1,
    // terminal: true,
    scope: {
      robot: "="
    }, // {} = isolate, true = child, false/undefined = no change
    // controller: function($scope, $element, $attrs, $transclude) {},
    // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
    restrict: 'E', // E = Element, A = Attribute, C = Class, M = Comment
    // template: '',
    templateUrl: 'templates/directives/robot-id-item.html',
    replace: true,
    // transclude: true,
    // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
    link: function($scope, iElm, iAttrs, controller) {

    }
  };
});

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
      controller: 'armDetailCtrl'
    })

});

