//Controller da view administradora.html
app.controller("indexadorGrupoConsorcioController", function ($scope, $http, messageService) {

    $scope.indexador = {};
    $scope.indexadores = [];
    var baseUrl = 'api/consorcio/indexadores';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.indexadores = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.indexador
        }).then(function (response) {
            $scope.indexador = {nome: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.indexador = angular.copy(indexador);
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
