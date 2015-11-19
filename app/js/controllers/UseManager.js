
angular.module('WebPage')
    .controller('UseManager', ['$scope', '$state', function ($scope, $state) {
        $scope.addUserType = function() {
            $state.go("index.usemanager.addusertype");
        };
    }]);