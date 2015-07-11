'use strict';

/**
 * @ngdoc service
 * @name intranetv2App.config.service
 * @description
 * # config
 * Service in the intranetv2App.
 */
angular.module('intranetv2App')
  .factory('ProviderConfigService', function () {
  return {
    apiKey: 'ffef470c9f26f4ca9ec567f092f49990672a0500',
    apiURL: 'https://api.intranet.com/'
  }
});