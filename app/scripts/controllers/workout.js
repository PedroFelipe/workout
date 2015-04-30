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
		$scope.convertedDate = $filter('date')($scope.activity.date.getDate(), 'dd/MM/yyyy');

		$scope.activity = [$scope.activity];
		$scope.activity[0].date = $scope.convertedDate;
		$scope.activities = $scope.activity.concat($scope.activities);

		$scope.convertedDate = '';
		$scope.activity.date = '';
	};

	$scope.remove = function(activity){
    $scope.activities.splice( $scope.activities.indexOf(activity), 1 );
  };

  this.onPikadaySelect = function onPikadaySelectFn(pikaday) {
    alert(pikaday.toString());
  };
})

.config(['pikadayConfigProvider', function(pikaday) {
  var locales = {
    ptbr: {
      previousMonth : 'Mês anterior',
      nextMonth     : 'Próximo mês',
      months        : ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"],
      weekdays      : ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"],
      weekdaysShort : ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]
    }
  };

  pikaday.setConfig({
  	format: 'DD/MM/YYYY',
  	defaultDate: 'DD/MM/YYYY',
    i18n: locales.ptbr,
    locales: locales
  });
}])