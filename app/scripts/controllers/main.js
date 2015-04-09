'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
app.controller('MainCtrl', ['$scope', '$firebaseArray', 'FIREBASE_URI', function($scope, $firebaseArray, FIREBASE_URI) {

  var ref = new Firebase(FIREBASE_URI);

  $scope.tasks = $firebaseArray(ref);

  $scope.newTask = '';

  //$scope.newTask = { desc: '', priority: '', status: 'active' };
  //$scope.currentTask = null;

  $scope.addTask = function() {
    var newTask = $scope.newTask.trim();
    
    $scope.tasks.$add({
      title: newTask.title,
      priority: newTask.priority,
      completed: false
    });
    $scope.newTask = '';
  };
/*
  $scope.changeState = function($index) {
    $scope.task = $scope.tasks[$index];
    $scope.task.status = 'complete';
    toDoTasks.changeState($index);
  };
*/
  //$scope.updateTask = function(id) {
  // toDoTasks.updateTask(id);
  //};

  //$scope.removeTask = function(id) {
  // toDoTasks.removeTask(id);
  //};
}]);
