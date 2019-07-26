app.controller('menuUsuarioController', function ($scope, $http, $window, $routeParams, $location, messageService, authAPI) {

    authAPI.setUsuario(1);
    usuarioCompartilhado = {};

    usuarioCompartilhado = authAPI.getUsuario();



    $scope.editarPerfil = function () {
//        console.log('Editando perfil');
//        console.log('Id do usuário: ' + usuarioCompartilhado.id);
        $location.url('/console/editar-perfil/');
    };
    
    $scope.logout = function () {
        $http({
            method: 'GET',
            url: '/logout'
        }).then(function (response) {
            $window.location.href = '/';
        }, function (response) {

        });
        
    };



});



