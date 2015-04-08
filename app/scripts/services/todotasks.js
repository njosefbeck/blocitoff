'use strict';

/**
 * @ngdoc service
 * @name blocitoffApp.toDoTasks
 * @description
 * # toDoTasks
 * Factory in the blocitoffApp.
 */
angular.module('blocitoffApp')
  .factory('toDoTasks', ['$firebaseObject', function ($firebaseObject) {
        var url = 'https://popping-inferno-5377.firebaseio.com/';
        var fbRef = new Firebase(url);
        var tasksRef = fbRef.child('tasks');
        var activeIndexRef = fbRef.child('users/nathan/active');
        var completeIndexRef = fbRef.child('users/nathan/complete');
        var expiredIndexRef = fbRef.child('users/nathan/expired');

        // return each ref as a synchronized object
        return $firebaseObject(tasksRef);
        return $firebaseObject(activeIndexRef);
        return $firebaseObject(completeIndexRef);
        return $firebaseObject(expiredIndexRef);
      }
  ]);
