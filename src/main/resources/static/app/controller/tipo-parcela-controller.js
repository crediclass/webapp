//Controller da view administradora.html
app.controller("tipoParcelaController", function ($scope, $http, messageService) {

    $scope.tipoParcela = {};
    $scope.tipoParcelas = [];
    var baseUrl = '/api/consorcio/tipo-parcela';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.tipoParcelas = response.data;
        }, function (response) {
           messageService.error();
        });

    };
     $scope.findAll();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.tipoParcela
        }).then(function (response) {
            $scope.tipoParcela = {nome: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (adm) {
        $scope.tipoParcela = angular.copy(adm);
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
