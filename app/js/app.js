angular.module('WebPage', ['ngAnimate', 'ui.router', 'ngMessages', 'mgcrea.ngStrap'])

    .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider',
        function ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) {

            $httpProvider.interceptors.push('TokenInterceptor');
            $urlRouterProvider.otherwise('/');

            $stateProvider
                .state('index', {
                    url: '/',
                    views: {
                        '': {
                            templateUrl: 'tpls/index.html'
                        },
                        'navBar@index': {
                            templateUrl: 'tpls/navbar.html',
                            controller: 'NavBarCtrl'
                        },
                        'mainView@index': {
                            templateUrl: 'tpls/main.html'
                        }
                    }
                })
                .state('index.usemanager', {
                    url: 'usemanager',
                    views: {
                        'mainView@index': {
                            templateUrl: 'tpls/usemanager.html',
                            controller: 'UseManager'
                        }
                    }
                })
                .state('index.usemanager.superuser', {
                    url: '/superuser',
                    templateUrl: 'tpls/superuser.html'
                })
                .state('index.usemanager.miduser', {
                    url: '/miduser',
                    templateUrl: 'tpls/miduser.html'
                })
                .state('index.usemanager.lowuser', {
                    url: '/lowuser',
                    templateUrl: 'tpls/lowuser.html'
                })
                .state('index.usemanager.blackuser', {
                    url: '/blackuser',
                    templateUrl: 'tpls/blackuser.html'
                })
                .state('index.usemanager.addusertype', {
                    url: '/addusertype',
                    templateUrl: 'tpls/addusertype.html'
                })

                .state('signin', {
                    url: '/signin',
                    templateUrl: 'tpls/user/signin.html'
                })
                .state('signup', {
                    url: '/signup',
                    templateUrl: 'tpls/user/signup.html',
                    controller: 'AuthenticationController'
                });

            $locationProvider.html5Mode(true).hashPrefix('!');
        }
    ]);

angular.element(document).ready(function() {
    angular.bootstrap(document, ['WebPage']);
});