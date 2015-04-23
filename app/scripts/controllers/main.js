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

  $scope.cleanupTasks = function() {
    var timediff = 0;
    var d1 = new Date();
    var d2;

    for (var i= 0; i < $scope.tasks.length; i++) {
      d2 = new Date($scope.tasks[i].created_on);
      timediff = d1 - d2;

      console.log(timediff);

      if (timediff > 10000){
        $scope.tasks[i].completed = true;
        $scope.tasks.$save();
      }
    }
  };

  $timeout( function(){
    console.log('ping');
    $scope.cleanupTasks();
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
