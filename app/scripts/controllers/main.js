'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
app.controller('MainCtrl', ['$scope', 'toDoTasks', '$timeout', function($scope, toDoTasks, $timeout) {

  $scope.newTask = { desc: '', priority: '', completed: false, created_on: Date() };

  $scope.tasks = toDoTasks.getTasks();

  $scope.taskComplete = false;

  $scope.addTask = function() {
    toDoTasks.addTask(angular.copy($scope.newTask));
    $scope.newTask = { desc: '', priority: '', completed: false, created_on: Date() };
  };

  $scope.hideExpired = function() {
    console.log("$scope.hideExpired - Timeout occurred");
  };

  $timeout( function(){
    $scope.hideExpired();
  }, 5000);

  $scope.filterActiveTasks = function(task) {
    if (task.completed === true) {
      return false;
    }
    else {
      return true;
    }
  };
}]);
