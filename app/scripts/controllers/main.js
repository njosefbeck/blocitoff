'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
app.controller('MainCtrl', ['$scope', 'toDoTasks', function($scope, toDoTasks) {

  $scope.newTask = { desc: '', priority: '', status: 'active' };
  $scope.currentTask = null;

  $scope.tasks = toDoTasks.getTasks();

  $scope.addTask = function() {
    toDoTasks.addTask(angular.copy($scope.newTask));
    $scope.newTask = { desc: '', priority: '', status: 'active' };
  };

  $scope.changeState = function(id) {
    toDoTasks.changeState(id);
  }

  //$scope.updateTask = function(id) {
  // toDoTasks.updateTask(id);
  //};

  //$scope.removeTask = function(id) {
  // toDoTasks.removeTask(id);
  //};
}]);
