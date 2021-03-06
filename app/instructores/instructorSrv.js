'use strict';

/**
 * @ngdoc service
 * @name intranetv2App.instructor
 * @description
 * # instructor
 * Service in the intranetv2App.
 */
angular.module('intranetv2App')
  .service('instructorSrv', function ($http,$q,ProviderConfigService) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return({
    	getAll: showall,
        show: show
    });

  
    function showall(){
    	var request = $http({
	    	method: 'GET',
	    	url: ProviderConfigService.apiURL+'instructores'
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

    function show(id){
        var request = $http.get(ProviderConfigService.apiURL+'instructores/'+id);
        return (request.then(handleSuccess, handleError ));
    }
  });
