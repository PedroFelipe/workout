'use strict';

angular.module('workout', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap'
])

.config(function ($routeProvider) {
  $routeProvider
    .when('/', {
      controller: 'WorkoutController',
      templateUrl: 'views/workout.html'
    })

    .otherwise({
      redirectTo: '/'
    });
})