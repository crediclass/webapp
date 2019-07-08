app.controller("cadastroAgrupamentoDocumentoController", function ($scope, $http, messageService) {

    $scope.agrupamentoDocumento = {};
    $scope.agrupamentoDocumentos = [];
    var baseUrl = 'api/modulo-gi/doc-agrupamento';

    $scope.findAll = function () {
        $scope.agrupamentoDocumentos = [];
        $http({
            method: 'GET',
            url: 'api/modulo-gi/doc-agrupamento/todos'
        }).then(function (response) {
            
            for (var i = 0, len = response.data.length; i < len; i++) {
                
                documento = {};
                documento.id = response.data[i][0];
                documento.ordenamento = response.data[i][1];
                documento.nomeAgrupamento = response.data[i][2];
                $scope.agrupamentoDocumentos.push(documento);
                
                //console.log(response.data[i][2]);
            }
            //$scope.agrupamentoDocumentos = response.data;
          //console.log($scope.agrupamentoDocumentos);
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();

    $scope.save = function () {
        delete $scope.agrupamentoDocumento.documentosProponente;
        console.log($scope.agrupamentoDocumento);
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.agrupamentoDocumento
        }).then(function (response) {
            $scope.agrupamentoDocumento = {nomeAgrupamento: null, ordenamento: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.agrupamentoDocumento = angular.copy(indexador);
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
