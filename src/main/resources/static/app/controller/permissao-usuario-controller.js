app.controller('permissaoUsuarioController', function ($scope, $http, messageService) {

    $scope.permissao = {};
    $scope.permissoes = [];
    var baseUrl = '/console/administracao/grupo-usuarios';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.permissoes = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.permissao
        }).then(function (response) {
            $scope.permissao = {nome: null, descricao: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (perm) {
        $scope.permissao = angular.copy(perm);
    };


    $scope.delete = function (id) {
        $http({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(function (response) {
            $scope.findAll();
        }, function (response) {

            messageService.error();
        });
    };


    $scope.findAll();


});