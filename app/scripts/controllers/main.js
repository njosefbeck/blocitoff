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

        // put active tasks in the scope for use in DOM
        $scope.activeTasks = $firebaseObject(activeIndexRef);
      
      };
    }
  ]);
