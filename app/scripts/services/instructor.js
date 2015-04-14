'use strict';

/**
 * @ngdoc service
 * @name intranetv2App.instructor
 * @description
 * # instructor
 * Service in the intranetv2App.
 */
angular.module('intranetv2App')
  .service('instructor', function ($http,$q) {
    // AngularJS will instantiate a singleton by calling "new" on this function
    return({
    	getAll: showall
    });

    function showall(){
    	var request = $http({
	    	method: 'GET',
	    	url: 'http://api.intranetv2.com/instructores',
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
