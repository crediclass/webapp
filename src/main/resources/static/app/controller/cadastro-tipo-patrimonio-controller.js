app.controller("cadastroTipoPatrimonioController", function ($scope, $http, messageService) {

    $scope.tipoPatrimonio = {};
    $scope.tiposPatrimonio = [];
    var baseUrl = 'api/modulo-gi/tipo-patrimonio';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.tiposPatrimonio = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.tipoPatrimonio
        }).then(function (response) {
            $scope.tipoPatrimonio = {descricao: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.tipoPatrimonio = angular.copy(indexador);
    };


    $scope.delete = function (id) {
        $http({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(function (response) {
            $scope.findAll();
            messageService.delete();
        }, function (response) {
            messageService.error();
            //$window.alert("Opsss, não foi possível remover! ");
        });
    };






});
