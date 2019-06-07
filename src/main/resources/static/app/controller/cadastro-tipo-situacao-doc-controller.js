app.controller("cadastroTipoSituacaoDocController", function ($scope, $http, messageService) {

    $scope.tipoSituacaoDoc = {};
    $scope.tiposSituacaoDoc = [];
    var baseUrl = 'api/modulo-gi/tipo-situacao-doc';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.tiposSituacaoDoc = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.tipoSituacaoDoc
        }).then(function (response) {
            $scope.tipoSituacaoDoc = {descricao: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.tipoSituacaoDoc = angular.copy(indexador);
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
