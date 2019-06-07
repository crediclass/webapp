app.controller("cadastroCategoriaProfissionalController", function ($scope, $http, messageService) {

    $scope.tipoCategoriaProfissional = {};
    $scope.tiposCategoriaProfissional = [];
    var baseUrl = 'api/modulo-gi/tipo-categoria-profissional';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.tiposCategoriaProfissional = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.tipoCategoriaProfissional
        }).then(function (response) {
            $scope.tipoCategoriaProfissional = {descricao: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.tipoCategoriaProfissional = angular.copy(indexador);
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
