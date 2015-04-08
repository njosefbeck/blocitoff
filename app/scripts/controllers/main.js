'use strict';

/**
 * @ngdoc function
 * @name blocitoffApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blocitoffApp
 */
app.controller('MainCtrl', ['$scope', 'toDoTasks', function($scope, toDoTasks) {

    // Add toDoTasks array to the scope to be used in our ng-repeat
    $scope.tasks = toDoTasks; 

    // Method to create new tasks; called by ng-submit
    $scope.addTask = function() {
      $scope.tasks.$add({
        desc: $scope.desc,
        priority: $scope.priority,
        status: $scope.status
      });

      // Reset task inputs
      $scope.desc = '';
      $scope.priority = '';
      $scope.status = '';
      };

    // If tasks are tempty, add a default
    $scope.tasks.$loaded(function() {
      if ($scope.tasks.length === 0) {
        $scope.tasks.$add({
          desc: 'Get a new puppy!',
          priority: 'med',
          status: 'active'
        });
      }
    });
}]);
