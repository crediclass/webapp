//Controller da view administradora.html
app.controller("cadastroEstadoCivilController", function ($scope, $http, messageService) {

    $scope.estadoCivil = {};
    $scope.estadosCivis = [];
    var baseUrl = 'api/modulo-gi/estado-civil';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.estadosCivis = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.estadoCivil
        }).then(function (response) {
            $scope.estadoCivil = {valor: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.estadoCivil = angular.copy(indexador);
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
