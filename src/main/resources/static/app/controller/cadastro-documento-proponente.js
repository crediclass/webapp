app.controller("cadastroDocumentoProponenteController", function ($scope, $http, messageService, oportunidadeService) {

    $scope.documento = {};
    $scope.documentos = [];
    $scope.agrupamentoDocumentos = [];
    var baseUrl = 'api/modulo-gi/doc-proponente';

    $scope.findAll = function () {
        $scope.documentos = [];
        oportunidadeService.get('api/modulo-gi/doc-proponente/todos').then(function (response) {
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

//        $http({
//            method: 'GET',
//            url: 'api/modulo-gi/doc-proponente/view'
//        }).then(function (response) {
//
//            for (var i = 0, len = response.data.length; i < len; i++) {
//                let objeto = response.data[i];
//                //console.log(objeto);
//
//                for (var prop in objeto) {
//                    if (prop == 'agrupamentos') {
//
//                        //console.log(objeto[prop]);
//                        if (typeof objeto[prop] == "number") {
//                            let url = '/api/modulo-gi/doc-agrupamento/' + objeto[prop];
//                            let agrupamentos = {};
//                            delete response.data[i].agrupamentos;
//                            $.getJSON(url, function (data) {
//
//                                agrupamentos = data;
//
//
//
//
//                            });
////                            let agrupamentos = {id: valor};
////                            delete response.data[i].agrupamentos;
//                            console.log(agrupamentos);
//
//                            response.data[i].agrupamentos = agrupamentos;
//                            //console.log(agrupamentos);
//                        }
//                    }
//
//                }
//
//            }
//
//            $scope.documentos = response.data;
//            //console.log(response.data);
//        }, function (response) {
//            messageService.error();
//        });

    };

    $scope.findAll();

    $scope.save = function () {
        delete $scope.documento.agrupamento.documentosProcurador;
        delete $scope.documento.agrupamento.documentosProponente;
        delete $scope.documento.agrupamento.documentosVendedor;
        $http({
            method: 'POST',
            url: 'api/modulo-gi/doc-proponente',
            data: $scope.documento
        }).then(function (response) {
            $scope.documento = {descricao: null, ordenamento: null};
            $scope.findAll();
            messageService.save();
        }, function (response) {
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
