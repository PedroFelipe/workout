'use strict';

angular.module('workout')

.controller('WorkoutController', function ($scope, $filter) {
	$scope.activities =
	[
		{
			'timespent': 65,
			'name': 'Running',
			'date': '29/04/2015'
		},
		{
			'timespent': 30,
			'name': 'Swimming',
			'date': '28/04/2015'
		},
		{
			'timespent': 120,
			'name': 'Biking',
			'date': '27/04/2015'
		}
	];

	$scope.totalTimeSpent = function() {
	  var count = 0;

	  $scope.activities.forEach(function(activity) {
	  	count += activity.timespent;
	  });

	  return $filter('time')(count);
	};

	$scope.addActivity = function() {
		$scope.activity = [$scope.activity];

		$scope.activities = $scope.activity.concat($scope.activities);
	};

	$scope.remove = function(activity){
    $scope.activities.splice( $scope.activities.indexOf(activity), 1 );
  };
})