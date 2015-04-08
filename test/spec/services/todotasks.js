'use strict';

describe('Service: toDoTasks', function () {

  // load the service's module
  beforeEach(module('blocitoffApp'));

  // instantiate service
  var toDoTasks;
  beforeEach(inject(function (_toDoTasks_) {
    toDoTasks = _toDoTasks_;
  }));

  it('should do something', function () {
    expect(!!toDoTasks).toBe(true);
  });

});
