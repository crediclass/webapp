app.controller('menuUsuarioController', function ($scope, $http, $window, $routeParams, $location, messageService, authAPI) {
    
    $scope.usuario = {};

    authAPI.setUsuario(1, 'Provisório');


    $scope.usuario = authAPI.getUsuario();



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



