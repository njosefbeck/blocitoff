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
    var tasks = $firebaseArray(ref);

    var getTasks = function() {
      return tasks;
    };

    var orderByPriority = function() {
      // Write more complex sort function here
    };

    var addTask = function(task) {
      tasks.$add(task);
    };

    var changeState = function(id) {
      console.log('I was clicked!');
      tasks.$save(id).then(function() {
        console.log(tasks);
      });
    };

    //var updateTask = function(id) {
    //  tasks.$save(id);
    //};

    //var removeTask = function(task) {
    //  tasks.$remove(id);
    //};

    return {
      getTasks: getTasks,
      addTask: addTask,
      changeState: changeState
      //updateTask: updateTask,
      //removeTask: removeTask
    };

}]);
