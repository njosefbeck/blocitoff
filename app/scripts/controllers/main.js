'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
app.controller('MainCtrl', ['$scope', 'toDoTasks', function($scope, toDoTasks) {

  $scope.newTask = { desc: '', priority: '', completed: false };

  $scope.tasks = toDoTasks.getTasks();

  $scope.addTask = function() {
    toDoTasks.addTask(angular.copy($scope.newTask));
    $scope.newTask = { desc: '', priority: '', completed: false };
  };

  $scope.completeTask = function(index) {
    $scope.tasks[index].completed = true;
    $scope.tasks.$save(index);
  };

  //$scope.updateTask = function(id) {
  // toDoTasks.updateTask(id);
  //};

  //$scope.removeTask = function(id) {
  // toDoTasks.removeTask(id);
  //};
}]);
