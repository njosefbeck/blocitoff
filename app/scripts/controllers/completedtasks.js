'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:CompletedtasksCtrl
 * @description
 * # CompletedtasksCtrl
 * Controller of the blocitoffApp
 */
app.controller('CompletedtasksCtrl', ['$scope', 'toDoTasks', function($scope, toDoTasks) {

  $scope.tasks = toDoTasks.getTasks();

  $scope.filterCompletedTasks = function(task) {
    if (task.completed === false) {
      return false;
    }
    else {
      return true;
    }
  };
}]);
