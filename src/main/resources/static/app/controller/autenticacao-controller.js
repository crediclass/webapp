app.controller('autenticationController', function ($scope, $window, authAPI) {
    $scope.auth;
    $scope.error = false;
    $scope.auth.credentials = {};

    var fnSuccess = function (response) {
        $scope.error = false;
        //Logica de Redirecionamento
        $window.location.href = '/home';

    };

    var fnError = function (response) {
        $scope.error = true;
    };

    /**
     * Enviar para o servidor.
     */
    function login() {
        authAPI.authenticate($scope.auth.credentials).then(fnSuccess, fnError);
    }
    ;

});
