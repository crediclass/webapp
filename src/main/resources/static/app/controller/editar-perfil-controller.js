app.controller('editarPerfilController', function ($scope, $http, $routeParams, $location, messageService, authAPI) {

    $scope.usuario = {};
    usuarioCompartilhado = {};

    usuarioCompartilhado = authAPI.getUsuario();



    $scope.findUsuario = function () {
        $http({
            method: 'GET',
            url: '/api/administracao/usuarios/' + usuarioCompartilhado.id
        }).then(function (response) {
            $scope.usuario = response.data;
            $scope.usuario.password = null;
            //console.log($scope.usuario);
        }, function (response) {
            messageService.error();
        });

    };
    $scope.findUsuario();
    

    
    
    $scope.save = function () {
        if($scope.usuario.password == null || $scope.usuario.password == 0 ){
            delete $scope.usuario.password;
        }
        $http({
            method: 'POST',
            url: '/api/administracao/usuarios',
            data: $scope.usuario
        }).then(function (response) {
            $location.url('/');
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };   
    
        function checkPassword(value){
        if (value != null && value.length > 0){
            return true;
        }else{
            return false;
        }
    }



});



