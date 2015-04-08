'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
angular.module('blocitoffApp')
  .controller('MainCtrl', ['$scope', 'toDoTasks',
    // Pass new toDoTasks factory into the controller
    function($scope, toDoTasks) {

      // Add toDoTasks array to the scope to be used in our ng-repeat
      $scope.tasks = toDoTasks;

      // Method to create new tasks; called by ng-submit
      $scope.addTask = function() {
        $scope.tasks.$add({
          content: $scope.task 
        });

        // Reset the task input
        $scope.task = '';
      };
    }
  ]);
