app.controller("cadastroTipoAtivoController", function ($scope, $http, messageService) {

    $scope.tipoAtivo = {};
    $scope.tiposAtivo = [];
    var baseUrl = 'api/modulo-gi/tipo-ativo';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.tiposAtivo = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.tipoAtivo
        }).then(function (response) {
            $scope.tipoAtivo = {descricao: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.tipoAtivo = angular.copy(indexador);
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
