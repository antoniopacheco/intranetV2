(function () {
    'use strict';

    angular
        .module('intranetv2App')
        .controller('LoginController', LoginController);

    LoginController.$inject = ['$rootScope', '$scope', '$location', '$localStorage', 'AuthenticationService',];

    function LoginController($rootScope, $scope, $location, $localStorage, AuthenticationService) {
        function successAuth(res) {
               $localStorage.token = res.token;
                checkApps();
              window.location = "#/";
           }

           function updateApps(data){
              //$localStorage.menu = data.apps;
              $rootScope.menu = data.apps;
              $rootScope.user = data.user;
           }
           function checkApps(){
              AuthenticationService.checkApps(updateApps);
           }

           $scope.login = function () {
              $scope.dataLoading = true;
              
               var formData = {
                   email: $scope.username,
                   password: $scope.password
               };
               AuthenticationService.signin(formData, successAuth, function () {
                   $rootScope.error = 'Invalid credentials.';
               })
           };

           $scope.logout = function () {
               AuthenticationService.logout(function () {
                   window.location = "/"
               });
           };
           $scope.token = $localStorage.token;
           $scope.tokenClaims = AuthenticationService.getTokenClaims();

    }

})();