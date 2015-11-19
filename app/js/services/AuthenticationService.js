angular.module('WebPage')
    .factory('AuthenticationService', function() {
        var auth = {
            isAuthenticated: false
        };

        return auth;
    });