'use strict';

angular.module('workout', [
  'ngRoute',
  'ngAnimate',
  'ngTouch',
  'ui.bootstrap',
  'ui.mask'
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