app.controller("listaOportunidadeController", function ($scope, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $http, $q, $location, messageService, oportunidadeService) {

    $scope.collapseActive = false;
    $scope.flagTipoDocumento;

    $scope.objetoJSON = {};
    $scope.oportunidade = {};
    $scope.oportunidades = [];
    $scope.tempData = [];
    $scope.ProponentesVendedoresProcuradores = [];
    $scope.docsAgrupamento = [];
    $scope.vm = {};
    $scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(0).notSortable()];



    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('paging', true)
            .withOption('searching', true)
            .withOption('info', false)
            //.withOption('scrollX', true)
            .withDOM('<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>')
            .withLanguageSource('https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json');







    var baseUrl = 'api/modulo-gi/oportunidade';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.oportunidades = response.data;
            //console.log($scope.oportunidades);
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();


    $scope.editarOportunidade = function (value) {
        $location.path('/console/gi/oportunidade/cadastrar/' + value.id);

    };

    $scope.abrirModalProponentesVendedoresProcuradores = function (value) {

        $http({
            method: 'GET',
            url: '/api/modulo-gi/proponentes-vendedores-procuradores/' + value.id
        }).then(function (response) {
            $scope.proponentesVendedoresProcuradores = response.data;
            //console.log($scope.oportunidades);
        }, function (response) {
            messageService.error();
        });

        var formulario = angular.element("#modal_form_proponente_vendedores_procuradores");
        if (formulario) {
            formulario.modal({
                backdrop: 'static',
                keyboard: false
            });
        }
    };


    $scope.abrirModalDocumentos = function (value) {

        let pessoaId = value.codigo_pessoa
        let oportunidadeId = value.oportunidade_id;
        var formulario = angular.element("#modal_form_proponente_vendedores_procuradores");
        formulario.modal('toggle');

        formulario = angular.element("#modal_form_documentos");
        if (formulario) {
            formulario.modal({
                backdrop: 'static',
                keyboard: false
            });
        }



        if (value.condicao == 'PROPONENTE' && value.tipo == 'PESSOA FÍSICA') {
            $scope.docsAgrupamento = [];
            $scope.flagTipoDocumento = 'PROPONENTE';
            //console.log('proponente');

            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            var retorno = oportunidadeService.documentosProponente(oportunidadeId, pessoaId);
            retorno.then(function (value) {
                oportunidadeService.getDocumentoProponentePessoa(pessoaId).then(function (response) {

                    for (var counter = 0; counter < response.data.length; counter++) {
                        if ((typeof response.data[ counter ]) == "number") {
                            response.data.splice(counter, 1);
                            counter--;
                        }
                    }
                    //console.log('2');
                    $scope.docsAgrupamento = response.data;
                    $scope.docsAgrupamento[0].documentosRepeater = response.data[0].documentosProponente;
                    //console.log($scope.docsAgrupamento);
                });
                //console.log(value);
            }, function (reason) {
                //console.log(reason);
            });







        } else if (value.condicao == 'VENDEDOR' && value.tipo == 'PESSOA FÍSICA') {
            $scope.docsAgrupamento = [];
            //console.log('vendedor');
            $scope.flagTipoDocumento = 'VENDEDOR';
            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            var retorno = oportunidadeService.documentosVendedor(oportunidadeId, pessoaId);
            retorno.then(function (value) {
                oportunidadeService.getDocumentoVendedorPessoa(pessoaId).then(function (response) {

                    for (var counter = 0; counter < response.data.length; counter++) {
                        if ((typeof response.data[ counter ]) == "number") {
                            response.data.splice(counter, 1);
                            counter--;
                        }
                    }
                    //console.log('2');
                    $scope.docsAgrupamento = response.data;
                    $scope.docsAgrupamento[0].documentosRepeater = response.data[0].documentosVendedor;
                    //console.log($scope.docsAgrupamento);
                });
                //console.log(value);
            }, function (reason) {
                //console.log(reason);
            });



        } else if (value.condicao == 'PROCURADOR' && value.tipo == 'PESSOA FÍSICA') {
            $scope.docsAgrupamento = [];
            $scope.flagTipoDocumento = 'PROCURADOR';
            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            var retorno = oportunidadeService.documentosProcurador(oportunidadeId, pessoaId);
            retorno.then(function (value) {
                oportunidadeService.getDocumentoProcuradorPessoa(pessoaId).then(function (response) {

                    for (var counter = 0; counter < response.data.length; counter++) {
                        if ((typeof response.data[ counter ]) == "number") {
                            response.data.splice(counter, 1);
                            counter--;
                        }
                    }
                    //console.log('2');
                    $scope.docsAgrupamento = response.data;
                    $scope.docsAgrupamento[0].documentosRepeater = response.data[0].documentosProcurador;
                    //console.log($scope.docsAgrupamento);
                });
                //console.log(value);
            }, function (reason) {
                //console.log(reason);
            });


        } else if (value.condicao == 'PROPONENTE' && value.tipo == 'PESSOA JURÍDICA') {
            $scope.docsAgrupamento = [];


        } else if (value.condicao == 'BEM OBJETO' && value.tipo == 'BEM OBJETO') {
            $scope.docsAgrupamento = [];
            $scope.flagTipoDocumento = 'BEM OBJETO';
            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            var retorno = oportunidadeService.documentosBemObjeto(oportunidadeId);
            retorno.then(function (value) {
                //console.log('OK');
                oportunidadeService.getDocumentoBemObjetoOportunidade(oportunidadeId).then(function (response) {

                    for (var counter = 0; counter < response.data.length; counter++) {
                        if ((typeof response.data[ counter ]) == "number") {
                            response.data.splice(counter, 1);
                            counter--;
                        }
                    }
                    //console.log('2');
                    $scope.docsAgrupamento = response.data;
                    console.log(response.data);
                    $scope.docsAgrupamento[0].documentosRepeater = response.data[0].documentosBemObjeto;
                    //console.log($scope.docsAgrupamento);
                });
                //console.log(value);
            }, function (reason) {
                //console.log(reason);
            });


        } else if (value.condicao == 'OPERACAO' && value.tipo == 'OPERACAO') {
            $scope.flagTipoDocumento = 'OPERACAO';
            $scope.docsAgrupamento = [];
            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            var retorno = oportunidadeService.documentosOperacao(oportunidadeId);
            retorno.then(function (value) {
                oportunidadeService.getDocumentoOperacaoOportunidade(oportunidadeId).then(function (response) {

                    //console.log(response);
                    $scope.docsAgrupamento = response.data;
                    //console.log(response.data);
                    $scope.docsAgrupamento[0].documentosRepeater = response.data[0].documentosOperacao;
                    //console.log($scope.docsAgrupamento);
                });
                //console.log(value);
            }, function (reason) {
                //console.log(reason);
            });
        }

    };





    $scope.savarDocumentos = function (value) {

        //console.log($scope.flagTipoDocumento);
        let url;
        if ($scope.flagTipoDocumento == 'PROPONENTE') {
            url = 'api/modulo-gi/doc-proponente-dados';
        } else if ($scope.flagTipoDocumento == 'VENDEDOR') {
            url = 'api/modulo-gi/doc-vendedor-dados';
        } else if ($scope.flagTipoDocumento == 'PROCURADOR') {
            url = 'api/modulo-gi/doc-procurador-dados'
        } else if ($scope.flagTipoDocumento == 'BEM OBJETO') {
            url = 'api/modulo-gi/doc-bem-objeto-dados'
        } else if ($scope.flagTipoDocumento == 'OPERACAO') {
            url = 'api/modulo-gi/doc-operacao-dados'
        }

        let documento = {};
        if ((typeof value.documento[0].documento) == "number")
        {            
            documento.id = value.documento[0].documento;
            delete value.documento[0].documento;
            value.documento[0]['documento'] = documento;
        }

        //console.log(value);

        $http({
            method: 'POST',
            url: url,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: value.documento[0]
        }).then(function (response) {
            //console.log('funfou');
        }, function (response) {
            //console.log('não funfou');
            //console.log(response);
        });

    };

    $scope.calculaValidade = function (value) {
        //console.log(value);
        // console.log(value.documento[0].dataEmissao);

        var dt = new Date(value.documento[0].dataEmissao);
        dt.setMonth(dt.getMonth() + value.validade);
        value.documento[0].dataValidade = dt.toLocaleDateString();
        console.log(dt.toLocaleDateString());
//        console.log(dt);
//        console.log(value);


    };




});

app.filter('isAtivoFiltro', function ($sce) {
    return function (val) {
        if (!val)
            return $sce.trustAsHtml('<span class="badge badge-danger">Inativo</span>');

        return $sce.trustAsHtml('<span class="badge badge-success">Ativo</span>');
    };

});


