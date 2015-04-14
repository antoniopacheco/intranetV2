'use strict';

describe('Service: instructor', function () {

  // load the service's module
  beforeEach(module('intranetv2App'));

  // instantiate service
  var instructor;
  beforeEach(inject(function (_instructor_) {
    instructor = _instructor_;
  }));

  it('should do something', function () {
    expect(!!instructor).toBe(true);
  });

});
