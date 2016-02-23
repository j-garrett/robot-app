//module
var robotApp = angular.module('robotApp', ['ngRoute']);

//routes
robotApp.config(function($routeProvider){

  $routeProvider
    .when('/', {
      templateUrl: '/pages/home.html'
    })

});