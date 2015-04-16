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

  $scope.taskComplete = false;

  $scope.addTask = function() {
    toDoTasks.addTask(angular.copy($scope.newTask));
    $scope.newTask = { desc: '', priority: '', completed: false };
  };

  $scope.completeTask = function(id) {
    $scope.tasks.$id.completed = true;
    $scope.tasks.$save(id);
  };

 // $scope.completeTask = function(index) {
 //   $scope.tasks[index].completed = true;
 //   $scope.tasks.$save(index);
 // };

  $scope.filterActiveTasks = function(task) {
    if (task.completed == true) {
      return false;
    }
    else {
      return true;
    }
  }
}]);
