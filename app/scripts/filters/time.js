'use strict';

angular.module('workout')

.filter('time', function() {
  return function(input) {
    var output = '';

    if(input < 60){
      output = input + 'm';
    } else if(input % 60 == 0){
      output = (input - input % 60) / 60 + 'h';
    } else {
       output = ((input - input % 60) / 60 + 'h' + ' ' + input % 60 + 'm');
    }

    return output;
  };
})