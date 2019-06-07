app.controller("cadastroPessoaJuridicaController", function ($scope, $http, $routeParams, $location, messageService) {


    $scope.pessoaJuridica = {};
    $scope.conjuge = {};
    $scope.formacaoSocietariaPessoa = {};
    $scope.participacaoEmpresasPessoa = {};
    $scope.bancoPessoa = {};
    $scope.rendaPessoa = {};
    $scope.comprovantePessoaJuridica = {};
    $scope.aplicacaoPessoa = {};
    $scope.patrimonioPessoa = {};
    $scope.endividamentoPessoa = {};

    $scope.ativos = [];
    $scope.dividas = [];
    $scope.patrimonios = [];
    $scope.situacaoPatrimonio = [];
    $scope.situacaoDoc = [];
    $scope.estadoCivil = [];
    $scope.tipoComprovanteRenda = [];
    $scope.bancos = [];
    $scope.pessoaId = $routeParams.pessoaId;

    // Mascaras de formatação

    var formatarData = angular.element("#data-fundacao");
    if (formatarData) {
        formatarData.mask('00/00/0000');
    }

    var formatarCpf = angular.element("#cpf-socio");
    if (formatarCpf) {
        formatarCpf.mask('000.000.000-00');
    }


    var formatarCnpj = angular.element("#cnpj");
    if (formatarCnpj) {
        formatarCnpj.mask('000.000.000/0000-00');
    }

    var formatarCnpjParticipacao = angular.element("#cnpjParticipacao");
    if (formatarCnpjParticipacao) {
        formatarCnpjParticipacao.mask('000.000.000/0000-00');
    }


    var baseUrl = 'api/modulo-gi/pessoa-juridica';

    $scope.carregaPessoaJuridica = function () {
        //verifica se foi informado o id da pessoa para edição
        if ($scope.pessoaId) {
            $http({
                method: 'GET',
                url: 'api/modulo-gi/pessoa-juridica/' + $scope.pessoaId
            }).then(function (response) {
                $scope.pessoaJuridica = response.data;
                //console.log($scope.pessoaJuridica);
            }, function (response) {
                messageService.error();
            });
        }
    };

    $scope.carregaPessoaJuridica();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.pessoaJuridica
        }).then(function (response) {
            messageService.save();
            $location.path('console/gi/listar/pessoa-juridica');
        }, function (response) {
            messageService.error();
        });

    };

    $scope.buscaEmpresa = function () {

        if ($scope.participacaoEmpresasPessoa.empresa.cnpj) {
            $http({
                method: 'GET',
                url: 'api/modulo-gi/pessoa-juridica/cnpj?cnpj=' + $scope.participacaoEmpresasPessoa.empresa.cnpj
            }).then(function (response) {
                if (response.data) {
                    //console.log(response.data);
                    $scope.participacaoEmpresasPessoa.empresa.id = response.data.id;
                    $scope.participacaoEmpresasPessoa.empresa.cnpj = response.data.cnpj;
                    $scope.participacaoEmpresasPessoa.empresa.razaoSocial = response.data.razaoSocial;
                } else {
                    $scope.participacaoEmpresasPessoa.empresa.cnpj = '';
                    $scope.participacaoEmpresasPessoa.empresa.razaoSocial = '';
                    messageService.cnpjNaoEncontrado();
                }

            }, function (response) {
                messageService.error();
            });
        }

    };


    // Dados Formação Societária
    $scope.adicionaFormacaoSocietaria = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaJuridica.formacaoSocietaria) {
            $scope.pessoaJuridica.formacaoSocietaria = new Array();
        }
        $scope.pessoaJuridica.formacaoSocietaria.push($scope.formacaoSocietariaPessoa);
        $scope.formacaoSocietariaPessoa = {};
        //console.log($scope.bancoPessoa);

    };

    $scope.editarFormacaoSocietaria = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.formacaoSocietariaPessoa = $scope.pessoaJuridica.formacaoSocietaria[index];
        $scope.pessoaJuridica.formacaoSocietaria.splice(index, 1);

    };

    $scope.removerFormacaoSocietaria = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.formacaoSocietaria.splice(index, 1);

    };
    // Fim Formação Societária



    // Dados Participação em empresas
    $scope.adicionaParticipacaoEmpresas = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaJuridica.participacaoEmpresas) {
            $scope.pessoaJuridica.participacaoEmpresas = new Array();
        }
        $scope.pessoaJuridica.participacaoEmpresas.push($scope.participacaoEmpresasPessoa);
        $scope.participacaoEmpresasPessoa = {};
        //console.log($scope.bancoPessoa);

    };

    $scope.editarParticipacaoEmpresas = function (index) {
        $scope.participacaoEmpresasPessoa = $scope.pessoaJuridica.participacaoEmpresas[index];
        //console.log($scope.participacaoEmpresasPessoa);
        $scope.pessoaJuridica.participacaoEmpresas.splice(index, 1);

    };

    $scope.removerParticipacaoEmpresas = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.formacaoSocietaria.splice(index, 1);

    };
    // Fim Formação Societária    



    // Dados Bancários
    $scope.adicionaBanco = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaJuridica.dadosBancarios) {
            $scope.pessoaJuridica.dadosBancarios = new Array();
        }
        $scope.pessoaJuridica.dadosBancarios.push($scope.bancoPessoa);
        $scope.bancoPessoa = {};
        //console.log($scope.bancoPessoa);

    };

    $scope.editarBanco = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.bancoPessoa = $scope.pessoaJuridica.dadosBancarios[index];
        $scope.pessoaJuridica.dadosBancarios.splice(index, 1);

    };

    $scope.removerBanco = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.dadosBancarios.splice(index, 1);

    };
    // Fim dados bancários

// Dados Renda
    $scope.adicionaRenda = function () {
        if (!$scope.pessoaJuridica.dadosRenda) {
            $scope.pessoaJuridica.dadosRenda = new Array();
        }
        $scope.pessoaJuridica.dadosRenda.push($scope.rendaPessoa);
        $scope.rendaPessoa = {};
        //console.log($scope.rendaPessoa);

    };

    $scope.editarRenda = function (index) {
        $scope.rendaPessoa = $scope.pessoaJuridica.dadosRenda[index];
        //console.log($scope.rendaPessoa);
        $scope.pessoaJuridica.dadosRenda.splice(index, 1);

    };

    $scope.removerRenda = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.dadosRenda.splice(index, 1);
    };
    // Fim dados renda

// Dados Aplicação financeira
    $scope.adicionaAplicaoFinanceira = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaJuridica.dadosAplicacoes) {
            $scope.pessoaJuridica.dadosAplicacoes = new Array();
        }
        $scope.pessoaJuridica.dadosAplicacoes.push($scope.aplicacaoPessoa);
        $scope.aplicacaoPessoa = {};


    };

    $scope.editarAplicaoFinanceira = function (index) {
        $scope.aplicacaoPessoa = $scope.pessoaJuridica.dadosAplicacoes[index];
        $scope.pessoaJuridica.dadosAplicacoes.splice(index, 1);

    };

    $scope.removerAplicaoFinanceira = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.dadosAplicacoes.splice(index, 1);

    };
    // Fim dados aplicações financeiras

// Dados patrimonio
    $scope.adicionaPatrimonio = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaJuridica.dadosPatrimonio) {
            $scope.pessoaJuridica.dadosPatrimonio = new Array();
        }
        $scope.pessoaJuridica.dadosPatrimonio.push($scope.patrimonioPessoa);
        $scope.patrimonioPessoa = {};
        //console.log($scope.rendaPessoa);

    };

    $scope.editarPatrimonio = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.patrimonioPessoa = $scope.pessoaJuridica.dadosPatrimonio[index];
        $scope.pessoaJuridica.dadosPatrimonio.splice(index, 1);

    };

    $scope.removerPatrimonio = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.dadosPatrimonio.splice(index, 1);
    };
    // Fim dados patrimonio    

// Dados endividamento
    $scope.adicionaEndividamento = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaJuridica.dadosEndividamento) {
            $scope.pessoaJuridica.dadosEndividamento = new Array();
        }
        $scope.pessoaJuridica.dadosEndividamento.push($scope.endividamentoPessoa);
        $scope.endividamentoPessoa = {};
        //console.log($scope.rendaPessoa);

    };

    $scope.editarEndividamento = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.endividamentoPessoa = $scope.pessoaJuridica.dadosEndividamento[index];
        $scope.pessoaJuridica.dadosEndividamento.splice(index, 1);

    };

    $scope.removerEndividamento = function (index) {
        // implementar confirmação para remover
        $scope.pessoaJuridica.dadosEndividamento.splice(index, 1);
    };
    // Fim dados endividamento  



    $scope.buscaCEP = function () {
        if ($scope.pessoaJuridica.cep) {
            $http({
                method: 'GET',
                url: 'https://viacep.com.br/ws/' + $scope.pessoaJuridica.cep + '/json'
            }).then(function (response) {
                $scope.pessoaJuridica.rua = response.data.logradouro;
                $scope.pessoaJuridica.bairro = response.data.bairro;
                $scope.pessoaJuridica.uf = response.data.uf;
                $scope.pessoaJuridica.cidade = response.data.localidade;
            }, function (response) {

            });
        } else {
            messageService.cepInvalido();
        }

    };





    $scope.carregaEstadoCivil = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/estado-civil'
        }).then(function (response) {
            $scope.estadoCivil = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaEstadoCivil();

    $scope.buscaSocio = function () {
        //console.log($scope.formacaoSocietariaPessoa.socio.cpf);
        if ($scope.formacaoSocietariaPessoa.socio.cpf) {

            $http({
                method: 'GET',
                url: 'api/modulo-gi/pessoa-fisica/cpf/' + $scope.formacaoSocietariaPessoa.socio.cpf
            }).then(function (response) {
                if (response.data) {
                    $scope.formacaoSocietariaPessoa.socio.id = response.data.id;
                    $scope.formacaoSocietariaPessoa.socio.cpf = response.data.cpf;
                    $scope.formacaoSocietariaPessoa.socio.nome = response.data.nome;
                } else {
                    $scope.formacaoSocietariaPessoa.socio.cpf = '';
                    $scope.formacaoSocietariaPessoa.socio.nome = '';
                    messageService.cpfNaoEncontrado();
                }

            }, function (response) {
                messageService.error();
            });
        }

    };




    $scope.carregaBancos = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/banco'
        }).then(function (response) {
            $scope.bancos = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaBancos();

    $scope.carregaTipoComprovanteRenda = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-comprovante-renda'
        }).then(function (response) {
            $scope.tipoComprovanteRenda = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaTipoComprovanteRenda();
    
     $scope.carregaTipoAtivos = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-ativo'
        }).then(function (response) {
            $scope.ativos = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaTipoAtivos(); 
    
    $scope.carregaTipoPatrimonio = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-patrimonio'
        }).then(function (response) {
            $scope.patrimonios = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaTipoPatrimonio(); 
    
    
    $scope.carregaTipoSituacaoPatrimonio = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-situacao-patrimonio'
        }).then(function (response) {
            $scope.situacaoPatrimonio = response.data;
           // console.log($scope.situacaoPatrimonio);
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaTipoSituacaoPatrimonio();   
    
    $scope.carregaTipoSituacaoDoc = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-situacao-doc'
        }).then(function (response) {
            $scope.situacaoDoc = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaTipoSituacaoDoc();    
    
    $scope.carregaTipoDivida = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-divida'
        }).then(function (response) {
            $scope.dividas = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaTipoDivida();    


});
