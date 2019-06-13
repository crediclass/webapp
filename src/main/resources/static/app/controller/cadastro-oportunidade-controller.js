app.controller("cadastroOportunidadeController", function ($scope, $http, $routeParams, $location, messageService, oportunidadeService) {

    $scope.oportunidade = {};
    $scope.proponente = {};
    $scope.proponenteLocal = {};
    $scope.vendedorLocal = {};
    $scope.procuradorLocal = {};
    $scope.procuradoresLocal = [];
    $scope.bemObjeto = {};


    $scope.oportunidadeId = $routeParams.oportunidadeId;

    // Mascaras de formatação

    var options = {
        onKeyPress: function (cpfcnpj, e, field, options) {
            var masks = ['000.000.000-000', '00.000.000/0000-00'];
            var mask = (cpfcnpj.length > 14) ? masks[1] : masks[0];
            $('.cpfcnpj').mask(mask, options);
        }
    };
    var formatarCpfCnpjProponente = angular.element("#doc-proponente");
    if (formatarCpfCnpjProponente) {
        formatarCpfCnpjProponente.mask('000.000.000-000', options);
    }
    var formatarCpfCnpjVendedor = angular.element("#doc-vendedor");
    if (formatarCpfCnpjVendedor) {
        formatarCpfCnpjVendedor.mask('000.000.000-000', options);
    }
    var formatarCpfProcurador = angular.element("#doc-procurador");
    if (formatarCpfProcurador) {
        formatarCpfProcurador.mask('000.000.000-00');
    }


    // Botão switch

    var switchBtnProponentePrincipal = angular.element("#proponentePrincial");
    if (switchBtnProponentePrincipal) {
        switchBtnProponentePrincipal.bootstrapToggle();
        switchBtnProponentePrincipal.change(function () {
            $scope.proponenteLocal.isPrincipal = $(this).prop('checked');
        });

    }

    var switchBtn = angular.element(".form-check-input-switch");
    if (switchBtn) {
        switchBtn.bootstrapToggle();
        switchBtn.change(function () {
            $scope.oportunidade.isAtivo = $(this).prop('checked');
        });

    }


    var baseUrl = 'api/modulo-gi/oportunidade';

    $scope.carregaOportunidade = function () {
        //verifica se foi informado o id da oportunidade para edição
        if ($scope.oportunidadeId) {
            $http({
                method: 'GET',
                url: 'api/modulo-gi/oportunidade/' + $scope.oportunidadeId
            }).then(function (response) {
                $scope.oportunidade = response.data;
                //console.log($scope.oportunidade);
                $scope.tempProcuradoresLocal = $scope.oportunidade.procuradores;
                console.log($scope.tempProcuradoresLocal);
            }, function (response) {
                messageService.error();
            });
        }
    };

    $scope.carregaOportunidade();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.oportunidade
        }).then(function (response) {
            messageService.save();
            $location.path('/console/gi/oportunidade/listar-oportunidade');
        }, function (response) {
            messageService.error();
        });

    };


    $scope.buscaProponente = function () {
        if ($scope.proponenteLocal.cpfCnpj) {
            if ($scope.proponenteLocal.cpfCnpj.length == 14) {
                //console.log('pessoa física');
                oportunidadeService.getProponenteByCpf($scope.proponenteLocal.cpfCnpj).then(function (value) {
                    //console.log(value.data);
                    if (value.data) {
                        $scope.proponenteLocal.nome = value.data.nome;
                        $scope.proponenteLocal.pessoaId = value.data.id;

                    } else {
                        messageService.cpfNaoEncontrado();
                    }

                }, function (reason) {
                    messageService.error();
                }, function (value) {
                    messageService.error();
                });
            } else if ($scope.proponenteLocal.cpfCnpj.length == 18) {
                //console.log('pessoa jurídica');
                oportunidadeService.getProponenteByCnpj($scope.proponenteLocal.cpfCnpj).then(function (value) {
                    //console.log(value.data);
                    if (value.data) {
                        $scope.proponenteLocal.nome = value.data.nomeFantasia;
                        $scope.proponenteLocal.pessoaId = value.data.id;
                    } else {
                        messageService.cnpjNaoEncontrado();
                    }

                }, function (reason) {
                    messageService.error();
                }, function (value) {
                    messageService.error();
                });

            }
        }



    };

    $scope.adicionaProponente = function () {

        if (!$scope.oportunidade.proponentes) {
            $scope.oportunidade.proponentes = new Array();
        }

        if ($scope.proponenteLocal.cpfCnpj.length == 14) {
            let proponente = {};
            proponente.id = $scope.proponenteLocal.id;
            proponente.isPrincipal = $scope.proponenteLocal.isPrincipal;
            proponente.pessoaFisica = {};
            proponente.pessoaFisica.id = $scope.proponenteLocal.pessoaId;
            proponente.pessoaFisica.nome = $scope.proponenteLocal.nome;
            proponente.pessoaFisica.cpf = $scope.proponenteLocal.cpfCnpj;


            $scope.oportunidade.proponentes.push(proponente);
            //console.log($scope.oportunidade);
        } else if ($scope.proponenteLocal.cpfCnpj.length == 18) {
            let proponente = {};
            proponente.id = $scope.proponenteLocal.id;
            proponente.isPrincipal = $scope.proponenteLocal.isPrincipal;
            proponente.pessoaJuridica = {};
            proponente.pessoaJuridica.id = $scope.proponenteLocal.pessoaId;
            proponente.pessoaJuridica.nomeFantasia = $scope.proponenteLocal.nome;
            proponente.pessoaJuridica.cnpj = $scope.proponenteLocal.cpfCnpj;

            $scope.oportunidade.proponentes.push(proponente);
            //console.log($scope.oportunidade);

        }


    };

    $scope.editarProponente = function (index) {
        let proponente = $scope.oportunidade.proponentes[index];

        if (proponente.pessoaFisica) {
            $scope.proponenteLocal.id = proponente.id;
            $scope.proponenteLocal.isPrincipal = proponente.isPrincipal;
            $scope.proponenteLocal.pessoaId = proponente.pessoaFisica.id;
            $scope.proponenteLocal.nome = proponente.pessoaFisica.nome;
            $scope.proponenteLocal.cpfCnpj = proponente.pessoaFisica.cpf;


        } else {
            $scope.proponenteLocal.nome = proponente.pessoaJuridica.nomeFantasia;
            $scope.proponenteLocal.cpfCnpj = proponente.pessoaJuridica.cnpj;
        }

        $scope.oportunidade.proponentes.splice(index, 1);

    };

    $scope.removerProponente = function (index) {
        $scope.oportunidade.proponentes.splice(index, 1);

    };

    $scope.buscarVendedor = function () {
        if ($scope.vendedorLocal.cpfCnpj) {
            if ($scope.vendedorLocal.cpfCnpj.length == 14) {
                //console.log('pessoa física');
                oportunidadeService.getProponenteByCpf($scope.vendedorLocal.cpfCnpj).then(function (value) {
                    // console.log(value.data);
                    if (value.data) {
                        $scope.vendedorLocal.nome = value.data.nome;
                        $scope.vendedorLocal.pessoaId = value.data.id;
                    } else {
                        messageService.cpfNaoEncontrado();
                    }

                }, function (reason) {
                    messageService.error();
                }, function (value) {
                    messageService.error();
                });
            } else if ($scope.vendedorLocal.cpfCnpj.length == 18) {
                //console.log('pessoa jurídica');
                oportunidadeService.getProponenteByCnpj($scope.vendedorLocal.cpfCnpj).then(function (value) {
                    //console.log(value.data);
                    if (value.data) {
                        $scope.vendedorLocal.nome = value.data.nomeFantasia;
                        $scope.vendedorLocal.pessoaId = value.data.id;
                    } else {
                        messageService.cnpjNaoEncontrado();
                    }

                }, function (reason) {
                    messageService.error();
                }, function (value) {
                    messageService.error();
                });

            }
        }

    };

    $scope.adicionaVendedor = function () {


        if (!$scope.oportunidade.vendedores) {
            $scope.oportunidade.vendedores = new Array();
        }

        if ($scope.vendedorLocal.cpfCnpj.length == 14) {
            let vendedor = {};
            vendedor.id = $scope.vendedorLocal.id;
            vendedor.pessoaFisica = {};
            vendedor.pessoaFisica.id = $scope.vendedorLocal.pessoaId;
            vendedor.pessoaFisica.nome = $scope.vendedorLocal.nome;
            vendedor.pessoaFisica.cpf = $scope.vendedorLocal.cpfCnpj;


            $scope.oportunidade.vendedores.push(vendedor);
            //console.log($scope.oportunidade);
        } else if ($scope.vendedorLocal.cpfCnpj.length == 18) {
            let vendedor = {};
            vendedor.id = $scope.proponenteLocal.id;
            vendedor.pessoaJuridica = {};
            vendedor.pessoaJuridica.id = $scope.vendedorLocal.pessoaId;
            vendedor.pessoaJuridica.nomeFantasia = $scope.vendedorLocal.nome;
            vendedor.pessoaJuridica.cnpj = $scope.vendedorLocal.cpfCnpj;

            $scope.oportunidade.vendedores.push(vendedor);
            //console.log($scope.oportunidade);

        }


    };

    $scope.editarVendedor = function (index) {
        let vendedor = $scope.oportunidade.vendedores[index];

        if (vendedor.pessoaFisica) {
            $scope.vendedorLocal.id = vendedor.id;
            $scope.vendedorLocal.pessoaId = vendedor.pessoaFisica.id;
            $scope.vendedorLocal.nome = vendedor.pessoaFisica.nome;
            $scope.vendedorLocal.cpfCnpj = vendedor.pessoaFisica.cpf;


        } else {
            $scope.vendedorLocal.nome = vendedor.pessoaJuridica.nomeFantasia;
            $scope.vendedorLocal.cpfCnpj = vendedor.pessoaJuridica.cnpj;
        }

        $scope.oportunidade.vendedores.splice(index, 1);

    };

    $scope.removerVendedor = function (index) {
        $scope.oportunidade.vendedores.splice(index, 1);

    };


    $scope.adicionaBemObjeto = function () {

        if (!$scope.oportunidade.bens) {
            $scope.oportunidade.bens = new Array();
        }

        $scope.oportunidade.bens.push($scope.bemObjeto);
        $scope.bemObjeto = {};

    };



    $scope.editarBemObjeto = function (index) {
        $scope.bemObjeto = $scope.oportunidade.bens[index];
        $scope.oportunidade.bens.splice(index, 1);

    };

    $scope.removerBemObjeto = function (index) {
        $scope.oportunidade.bens.splice(index, 1);

    };


    $scope.buscaProcurador = function (index, outorgante_id) {
        if ($scope.procuradoresLocal[index].outorgado.cpf) {
            oportunidadeService.getProponenteByCpf($scope.procuradoresLocal[index].outorgado.cpf).then(function (value) {
                // console.log(value.data);
                if (value.data) {
                    $scope.procuradoresLocal[index].id = 1;
                    $scope.procuradoresLocal[index].outorgado.id = value.data.id;
                    $scope.procuradoresLocal[index].outorgado.nome = value.data.nome;
                    
                    $scope.procuradoresLocal[index].outorgante = {};
                    $scope.procuradoresLocal[index].outorgante.id = outorgante_id;
//                    console.log($scope.procuradoresLocal[index]);
                } else {
                    messageService.cpfNaoEncontrado();
                }


            }, function (reason) {
                messageService.error();
            }, function (value) {
                messageService.error();
            });

        } 
        //console.log($scope.procuradoresLocal);
        $scope.oportunidade.procuradores = $scope.procuradoresLocal;
        console.log($scope.oportunidade);
        
        

    };









});


app.filter('isPrincipalFiltro', function ($sce) {
    return function (val) {
        if (!val)
            return $sce.trustAsHtml('<span class="badge badge-danger">Não</span>');

        return $sce.trustAsHtml('<span class="badge badge-success">Sim</span>');
    };
});


app.filter('tipoPessoa', function ($sce) {
    return function (val) {
        if (val)
            return $sce.trustAsHtml('<span class="badge badge-primary">Pessoa Física</span>');
        return $sce.trustAsHtml('<span class="badge badge-info">Pessoa Jurídica</span>');
    };
});



