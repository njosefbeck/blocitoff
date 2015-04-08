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

        // download active tasks into a local object
        var syncActiveObject = $firebaseObject(activeIndexRef);

        // synch object with a three-way data binding
        syncActiveObject.$bindTo($scope, "active");
      
      };
    }
  ]);
