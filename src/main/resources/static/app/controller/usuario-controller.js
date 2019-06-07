app.controller('usuarioController', function ($scope, $http, messageService) {

    $scope.usuario = {};
    $scope.usuarios = [];
    $scope.permissoes = [];
    var baseUrl = '/console/administracao/usuarios';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.usuarios = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.usuario
        }).then(function (response) {
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (user) {
        $scope.usuario = angular.copy(user);
    };


    $scope.delete = function (id) {
        $http({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(function (response) {
            $scope.findAll();
        }, function (response) {
            console.log(response);
            messageService.delete();
        });
    };

    getAllPermissoes = function () {
        $http({
            method: 'GET',
            url: '/console/administracao/grupo-usuarios'
        }).then(function (response) {
            $scope.permissoes = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    getAllPermissoes();
    $scope.findAll();


});
