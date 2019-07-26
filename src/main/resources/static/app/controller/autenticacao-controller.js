app.controller('autenticationController', function ($rootScope, $scope, $http, $location, authAPI) {

    $scope.credentials = {};

    var authenticate = function (credentials, callback) {

        var headers = credentials ? {authorization: "Basic "
                    + btoa(credentials.username + ":" + credentials.password)
        } : {};

        $http({
            method: 'GET',
            url: '/user',
            headers: headers
        }).then(function (data) {
            if (data.name) {
                $rootScope.authenticated = true;
            } else {
                $rootScope.authenticated = false;
            }
            callback && callback();
        }, function () {
            $rootScope.authenticated = false;
            callback && callback();
        });

    }
    authenticate();

    $scope.login = function () {
        authenticate($scope.credentials, function () {
            if ($rootScope.authenticated) {
                $location.path("/");
                $scope.error = false;
            } else {
                $location.path("/login");
                $scope.error = true;
            }
        });
    };

    /**
     * Enviar para o servidor.
     */


});
