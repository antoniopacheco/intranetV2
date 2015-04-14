'use strict';

describe('Controller: InstructorCtrl', function () {

  // load the controller's module
  beforeEach(module('intranetv2App'));

  var InstructorCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    InstructorCtrl = $controller('InstructorCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
