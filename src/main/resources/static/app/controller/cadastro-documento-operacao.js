app.controller("cadastroDocumentoOperacaoController", function ($scope, $http, messageService, oportunidadeService) {

    $scope.documento = {};
    $scope.documentos = [];
    $scope.agrupamentoDocumentos = [];
    var baseUrl = 'api/modulo-gi/doc-operacao';

    $scope.findAll = function () {
        $scope.documentos = [];
        oportunidadeService.get('api/modulo-gi/doc-operacao/todos').then(function (response) {
           // console.log(response.data);
            for (var i = 0, len = response.data.length; i < len; i++) {
                let documento = {};
                let agrupamento = {};
                documento.id = response.data[i][0];
                documento.ordenamento = response.data[i][1];
                documento.descricao = response.data[i][2];
                documento.validade = response.data[i][3];
                agrupamento.id = response.data[i][4];
                agrupamento.nomeAgrupamento = response.data[i][5];               
                documento['agrupamento']= agrupamento;
                
                
                $scope.documentos.push(documento);
                
            }
            //console.log($scope.documentos);
        });



    };

    $scope.findAll();

    $scope.save = function () {
        //delete $scope.documento.documento;
        delete $scope.documento.agrupamento.documentosProcurador;
        delete $scope.documento.agrupamento.documentosProponente;
        delete $scope.documento.agrupamento.documentosVendedor;
        console.log($scope.documento);
        $http({
            method: 'POST',
            url: 'api/modulo-gi/doc-operacao',
            data: $scope.documento
        }).then(function (response) {
            $scope.documento = {descricao: null, ordenamento: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
            //console.log(response);
            messageService.error();
        });
    };


    $scope.edit = function (indexador) {
        $scope.documento = angular.copy(indexador);
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

    getAllGrupoDocumentos = function () {
        $http({
            method: 'GET',
            url: 'api/modulo-gi/doc-agrupamento'
        }).then(function (response) {
            $scope.agrupamentoDocumentos = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    getAllGrupoDocumentos();






});
