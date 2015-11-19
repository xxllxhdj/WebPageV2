angular.module('WebPage')
    .controller('AuthenticationController', ['$scope', '$state', '$http', '$location', '$window', '$alert', 'PasswordValidator', 'AuthenticationService',
        function ($scope, $state, $http, $location, $window, $alert, PasswordValidator, AuthenticationService) {
            $scope.credentials = {
                email: '',
                password: ''
            };
            $scope.popoverMsg = PasswordValidator.getPopoverMsg();

            $scope.signup = function (isValid) {

                if (!isValid) {
                    $scope.$broadcast('show-errors-check-validity', 'userForm');
                    return false;
                }

                $http.post('/api/auth/signup', $scope.credentials).success(function (response) {
                    // If successful we assign the response to the global user model
                    //$scope.authentication.user = response;

                    // And redirect to the previous or home page
                    //$state.go($state.previous.state.name || 'home', $state.previous.params);
                    $alert({
                        title: '注册成功:',
                        content: angular.toJson(response),
                        placement: 'top',
                        container: 'body',
                        type: 'info',
                        show: true,
                        animation: 'am-fade-and-slide-top'
                    });
                }).error(function (response) {
                    //$scope.error = response.message;
                    $alert({
                        title: '注册失败:',
                        content: response.message,
                        placement: 'top',
                        container: 'body',
                        type: 'info',
                        show: true,
                        animation: 'am-fade-and-slide-top'
                    });
                });
            };

            $scope.signin = function (isValid) {

                if (!isValid) {
                    //$scope.$broadcast('show-errors-check-validity', 'userForm');

                    return false;
                }

                $http.post('/api/auth/signin', {
                    username: 'test@test.com',
                    password: 'Xxxl123456!'
                }).success(function (response) {
                    // If successful we assign the response to the global user model
                    //$scope.authentication.user = response;

                    // And redirect to the previous or home page
                    //$state.go($state.previous.state.name || 'home', $state.previous.params);
                    $alert({
                        title: '登录成功:',
                        content: angular.toJson(response),
                        placement: 'top',
                        container: 'body',
                        type: 'info',
                        show: true,
                        animation: 'am-fade-and-slide-top'
                    });
                    AuthenticationService.isAuthenticated = true;
                    $window.sessionStorage.token = response.token;
                }).error(function (response) {
                    //$scope.error = response.message;
                    $alert({
                        title: '登录失败:',
                        content: response.message,
                        placement: 'top',
                        container: 'body',
                        type: 'info',
                        show: true,
                        animation: 'am-fade-and-slide-top'
                    });
                });
            };
        }
    ]);