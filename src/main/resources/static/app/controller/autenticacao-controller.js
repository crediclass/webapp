app.controller('autenticationController', function ($scope, $window, authAPI) {
    $scope.error = false;
    $scope.credentials = {};

    var fnSuccess = function (response) {
        console.log('funfou');
        $scope.error = false;
        //Logica de Redirecionamento
        $window.location.href = '/home';

    };

    var fnError = function (response) {
        console.log('xiii deu erro');
        console.log(response);
        $scope.error = true;
    };

    /**
     * Enviar para o servidor.
     */
    $scope.login = function() {
        
        authAPI.authenticate($scope.credentials).then(fnSuccess, fnError);
    };

});
