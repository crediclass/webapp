//Controller da view administradora.html
app.controller("periodoLancesController", function ($scope, $http, messageService) {

    $scope.periodo = {};
    $scope.periodos = [];
    var baseUrl = 'api/consorcio/periodo-lances';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.periodos = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.periodo
        }).then(function (response) {
            $scope.periodo = {valor: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (periodo) {
        $scope.periodo = angular.copy(periodo);
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
