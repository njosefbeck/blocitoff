'use strict';

/**
 * @ngdoc service
 * @name blocitoffApp.toDoTasks
 * @description
 * # toDoTasks
 * Factory in the blocitoffApp.
 */
angular.module('blocitoffApp')
  .factory('toDoTasks', ["$firebaseArray", function ($firebaseArray) {
        // This creates a reference to the Firebase where we will store our task list data
        var ref = new Firebase("https://popping-inferno-5377.firebaseio.com/")

        // This uses AngularFire to create the synchronized array
        return $firebaseArray(ref);
      }
  ]);
