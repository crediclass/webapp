app.controller("cadastroTipoSituacaoPatrimonioController", function ($scope, $http, messageService) {

    $scope.tipoSituacaoPatrimonio = {};
    $scope.tiposSituacaoPatrimonio = [];
    var baseUrl = 'api/modulo-gi/tipo-situacao-patrimonio';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.tiposSituacaoPatrimonio = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.tipoSituacaoPatrimonio
        }).then(function (response) {
            $scope.tipoSituacaoPatrimonio = {descricao: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.tipoSituacaoPatrimonio = angular.copy(indexador);
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
