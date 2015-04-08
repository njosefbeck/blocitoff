'use strict';

/**
 * @ngdoc service
 * @name blocitoffApp.toDoTasks
 * @description
 * # toDoTasks
 * Factory in the blocitoffApp.
 */
app.factory('toDoTasks', ['$firebaseArray', 'FIREBASE_URI', function ($firebaseArray, FIREBASE_URI) {
    var ref = new Firebase(FIREBASE_URI);
}]);
