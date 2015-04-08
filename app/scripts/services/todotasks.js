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

    var addTask = function(task) {
      tasks.$add(task);
      
      var sortByPriority = function() {
        tasks.orderByValue().on("value", function(snapshot) {
          snapshot.forEach(function(data) {
            return data.val();
          })
        });
      }
    };

    //var updateTask = function(id) {
    //  tasks.$save(id);
    //};

    //var removeTask = function(task) {
    //  tasks.$remove(id);
    //};

    return {
      getTasks: getTasks,
      addTask: addTask
      //updateTask: updateTask,
      //removeTask: removeTask
    };

}]);
