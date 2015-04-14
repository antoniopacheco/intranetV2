'use strict';

/**
 * @ngdoc filter
 * @name intranetv2App.filter:unsafe
 * @function
 * @description
 * # unsafe
 * Filter in the intranetv2App.
 */
angular.module('intranetv2App')
  .filter('unsafe', function($sce) { return $sce.trustAsHtml; });