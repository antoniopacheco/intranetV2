angular.module('intranetv2App')
   .factory('AuthenticationService', ['$http', '$localStorage', 'urls', '$rootScope', function ($http, $localStorage, urls, $rootScope) {
       function urlBase64Decode(str) {
           var output = str.replace('-', '+').replace('_', '/');
           switch (output.length % 4) {
               case 0:
                   break;
               case 2:
                   output += '==';
                   break;
               case 3:
                   output += '=';
                   break;
               default:
                   throw 'Illegal base64url string!';
           }
           return window.atob(output);
       }

       function getClaimsFromToken() {
           var token = $localStorage.token;
           var user = {};
           if (typeof token !== 'undefined') {
               var encoded = token.split('.')[1];
               user = JSON.parse(urlBase64Decode(encoded));
           }
           return user;
       }


       var tokenClaims = getClaimsFromToken();

       return {
           signup: function (data, success, error) {
               $http.post(urls.BASE_API + '/user/signup', data).success(success).error(error)
           },
           signin: function (data, success, error) {
               $http.post(urls.BASE_API + '/user/getlogin', data).success(success).error(error)
           },
           logout: function (success) {
            console.log("holaa");
               tokenClaims = {};
               delete $localStorage.token;
               success();
           },
           getTokenClaims: function () {
               return tokenClaims;
           },
           checkApps: function(success){
              $http.get(urls.BASE_API + '/user/getApps').success( function(data){
                $rootScope.menu = data.apps;
                $rootScope.user = data.user;
              })
           }
       };
   }
   ]);