'use strict';

/**
 * @ngdoc service
 * @name intranetv2App.poaSrv
 * @description
 * # Pagos
 * Service in the intranetv2App.
 */
angular.module('intranetv2App')
  .service('poaSrv', function ($http,$q,ProviderConfigService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return({
    	getResume: showall
    });

    function showall(){
      var request = $http({
	     method: 'GET',
	     url: ProviderConfigService.apiURL+'poa/getResume'
      });
    	return (request.then(handleSuccess, handleError ));
    }

    function handleError(response){
      if(!angular.isObject(response.data)||
        !response.data.message){
        return($q.reject("Se produjo un Error desconcocido"));
      }
      return ($q.reject(response.data.message));
    }
    
    function handleSuccess(response){
      return(response.data);
    }

  });
