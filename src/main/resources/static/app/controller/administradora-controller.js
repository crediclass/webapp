//Controller da view administradora.html
app.controller("administradoraController", function ($scope, $http, messageService) {

    $scope.administradora = {};
    $scope.administradoras = [];
    var baseUrl = '/api/consorcio/administradoras';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.administradoras = response.data;
        }, function (response) {
           messageService.error();
        });

    };

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.administradora
        }).then(function (response) {
            $scope.administradora = {nome: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (adm) {
        $scope.administradora = angular.copy(adm);
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

    
    $scope.findAll();


});
