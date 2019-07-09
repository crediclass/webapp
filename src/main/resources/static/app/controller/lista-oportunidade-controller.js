app.controller("listaOportunidadeController", function ($scope, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $http, $q, $location, messageService, oportunidadeService) {

    $scope.collapseActive = false;
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

        let pessoaId = value.codigo_pessoa;
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
            console.log('proponente');

            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            $http({
                method: 'GET',
                url: '/api/modulo-gi/doc-agrupamento/'
            }).then(function (response) {
                $scope.docsAgrupamento = response.data;


                for (var i = 0, len = $scope.docsAgrupamento.length; i < len; i++) {
                    for (var a = 0, counter = $scope.docsAgrupamento[i].documentosProponente.length; a < counter; a++) {
                        //console.log($scope.docsAgrupamento[i].documentosProponente[a].documento[0].id);
                        json = {
                            "id": $scope.docsAgrupamento[i].documentosProponente[a].documento[0].id,
                            "documento": {
                                "id": $scope.docsAgrupamento[i].documentosProponente[a].id},
                            "pessoaFisica": {
                                "id": pessoaId
                            }
                        };

                        $http({
                            method: 'POST',
                            url: 'api/modulo-gi/doc-proponente-dados',
                            data: json
                        });

                    }

                }


            });

            oportunidadeService.getDocumentoProponentePessoa(pessoaId).then(function (response) {
                for (var counter = 0; counter < response.data.length; counter++) {
                    if ((typeof response.data[ counter ]) == "number") {
                        response.data.splice(counter, 1);
                        counter--;
                    }
                }

                $scope.docsAgrupamento = response.data;
                // console.log($scope.docsAgrupamento);

            });




        } else if (value.condicao == 'VENDEDOR' && value.tipo == 'PESSOA FÍSICA') {
            $scope.docsAgrupamento = [];
            console.log('vendedor');

            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            $http({
                method: 'GET',
                url: '/api/modulo-gi/doc-agrupamento/'
            }).then(function (response) {
                $scope.docsAgrupamento = response.data;


                for (var i = 0, len = $scope.docsAgrupamento.length; i < len; i++) {
                    for (var a = 0, counter = $scope.docsAgrupamento[i].documentosVendedor.length; a < counter; a++) {
                        json = {
                            "id": $scope.docsAgrupamento[i].documentosVendedor[a].documento[0].id,
                            "documento": {
                                "id": $scope.docsAgrupamento[i].documentosVendedor[a].id},
                            "pessoaFisica": {
                                "id": pessoaId
                            }
                        };

                        $http({
                            method: 'POST',
                            url: 'api/modulo-gi/doc-vendedor-dados',
                            data: json
                        });

                    }

                }


            });

            oportunidadeService.getDocumentoVendedorPessoa(pessoaId).then(function (response) {
                for (var counter = 0; counter < response.data.length; counter++) {
                    if ((typeof response.data[ counter ]) == "number") {
                        response.data.splice(counter, 1);
                        counter--;
                    }
                }

                $scope.docsAgrupamento = response.data;
                // console.log($scope.docsAgrupamento);

            });

        } else if (value.condicao == 'PROCURADOR' && value.tipo == 'PESSOA FÍSICA') {
            $scope.docsAgrupamento = [];

            // Chamada para preencher o banco com os dados para fixar os documentos a pessoa, executa somente se nunca foi executado.  
            $http({
                method: 'GET',
                url: '/api/modulo-gi/doc-agrupamento/'
            }).then(function (response) {
                $scope.docsAgrupamento = response.data;


                for (var i = 0, len = $scope.docsAgrupamento.length; i < len; i++) {
                    for (var a = 0, counter = $scope.docsAgrupamento[i].documentosProcurador.length; a < counter; a++) {
                        json = {
                            "id": $scope.docsAgrupamento[i].documentosProcurador[a].documento[0].id,
                            "documento": {
                                "id": $scope.docsAgrupamento[i].documentosProcurador[a].id},
                            "pessoaFisica": {
                                "id": pessoaId
                            }
                        };

                        $http({
                            method: 'POST',
                            url: 'api/modulo-gi/doc-procurador-dados',
                            data: json
                        });

                    }

                }


            });

            oportunidadeService.getDocumentoProcuradorPessoa(pessoaId).then(function (response) {
                for (var counter = 0; counter < response.data.length; counter++) {
                    if ((typeof response.data[ counter ]) == "number") {
                        response.data.splice(counter, 1);
                        counter--;
                    }
                }

                $scope.docsAgrupamento = response.data;
                // console.log($scope.docsAgrupamento);

            });

        } else if (value.condicao == 'PROPONENTE' && value.tipo == 'PESSOA JURÍDICA') {
            $scope.docsAgrupamento = [];

        }

    };



    $scope.savarDocumentos = function (value) {

        let documento = {};
        if ((typeof value.documento[0].documento) == "number")
        {
            documento.id = value.documento[0].documento;
            delete value.documento[0].documento;
            value.documento[0]['documento'] = documento;
        }

        $http({
            method: 'POST',
            url: '/api/modulo-gi/doc-proponente-dados',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            data: value.documento[0]
        }).then(function (response) {

        }, function (response) {

        });

    };

    $scope.calculaValidade = function (value) {
        //console.log(value);
        // console.log(value.documento[0].dataEmissao);

        var dt = new Date(value.documento[0].dataEmissao);
        dt.setFullYear(dt.getFullYear() + value.validade);
        value.documento[0].dataValidade = dt.toLocaleDateString();
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


