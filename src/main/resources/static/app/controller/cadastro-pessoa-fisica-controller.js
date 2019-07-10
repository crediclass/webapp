app.controller("cadastroPessoaFisicaController", function ($scope, $http, $routeParams, $location, messageService) {

    $scope.pessoaFisica = {};
    $scope.conjuge = {};
    $scope.bancoPessoa = {};
    $scope.rendaPessoa = {};
    $scope.aplicacaoPessoa = {};
    $scope.patrimonioPessoa = {};
    $scope.endividamentoPessoa = {};
    
    
    $scope.ativos = [];
    $scope.dividas = [];
    $scope.patrimonios = [];
    $scope.categoriaProfissional = [];
    $scope.situacaoPatrimonio = [];
    $scope.situacaoDoc = [];
    $scope.estadoCivil = [];
    $scope.bancos = [];
    $scope.pessoaId = $routeParams.pessoaId;

    // Mascaras de formatação

    var formatarData = angular.element("#data-nascimento");
    if (formatarData) {
        formatarData.mask('00/00/0000');
    }


    var formatarCpf = angular.element("#cpf");
    if (formatarCpf) {
        formatarCpf.mask('000.000.000-00');
    }

    var formatarCpfConjuge = angular.element("#cpfConjuge");
    if (formatarCpfConjuge) {
        formatarCpfConjuge.mask('000.000.000-00');
    }




    var baseUrl = 'api/modulo-gi/pessoa-fisica';

    $scope.carregaPessoaFisica = function () {
        //verifica se foi informado o id da pessoa para edição
        if ($scope.pessoaId) {
            $http({
                method: 'GET',
                url: 'api/modulo-gi/pessoa-fisica/' + $scope.pessoaId
            }).then(function (response) {
                $scope.pessoaFisica = response.data;
            }, function (response) {
                messageService.error();
            });
        }
    };

    $scope.carregaPessoaFisica();

    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.pessoaFisica
        }).then(function (response) {
            messageService.save();
            $location.path('console/gi/listar/pessoa-fisica');
        }, function (response) {
            messageService.error();
        });

    };


    // Dados Bancários
    $scope.adicionaBanco = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaFisica.dadosBancarios) {
            $scope.pessoaFisica.dadosBancarios = new Array();
        }
        $scope.pessoaFisica.dadosBancarios.push($scope.bancoPessoa);
        $scope.bancoPessoa = {};
        //console.log($scope.bancoPessoa);

    };

    $scope.editarBanco = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.bancoPessoa = $scope.pessoaFisica.dadosBancarios[index];
        $scope.pessoaFisica.dadosBancarios.splice(index, 1);

    };

    $scope.removerBanco = function (index) {
        // implementar confirmação para remover
        $scope.pessoaFisica.dadosBancarios.splice(index, 1);

    };
    // Fim dados bancários

// Dados Renda
    $scope.adicionaRenda = function () {
        //console.log($scope.pessoaFisica);
        //$scope.rendaPessoa.comprovante = document.getElementById('comprovante').files[0];
        if (!$scope.pessoaFisica.dadosRenda) {
            $scope.pessoaFisica.dadosRenda = new Array();
        }
        $scope.pessoaFisica.dadosRenda.push($scope.rendaPessoa);
        $scope.rendaPessoa = {};
        //console.log($scope.rendaPessoa);

    };

    $scope.editarRenda = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.rendaPessoa = $scope.pessoaFisica.dadosRenda[index];
        $scope.pessoaFisica.dadosRenda.splice(index, 1);

    };

    $scope.removerRenda = function (index) {
        // implementar confirmação para remover
        $scope.pessoaFisica.dadosRenda.splice(index, 1);
    };
    // Fim dados renda

// Dados Aplicação financeira
    $scope.adicionaAplicaoFinanceira = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaFisica.dadosAplicacoes) {
            $scope.pessoaFisica.dadosAplicacoes = new Array();
        }
        $scope.pessoaFisica.dadosAplicacoes.push($scope.aplicacaoPessoa);
        $scope.aplicacaoPessoa = {};


    };

    $scope.editarAplicaoFinanceira = function (index) {
        $scope.aplicacaoPessoa = $scope.pessoaFisica.dadosAplicacoes[index];
        $scope.pessoaFisica.dadosAplicacoes.splice(index, 1);

    };

    $scope.removerAplicaoFinanceira = function (index) {
        // implementar confirmação para remover
        $scope.pessoaFisica.dadosAplicacoes.splice(index, 1);

    };
    // Fim dados aplicações financeiras

// Dados patrimonio
    $scope.adicionaPatrimonio = function () {
        console.log($scope.patrimonioPessoa);
        if (!$scope.pessoaFisica.dadosPatrimonio) {
            $scope.pessoaFisica.dadosPatrimonio = new Array();
        }
        $scope.pessoaFisica.dadosPatrimonio.push($scope.patrimonioPessoa);
        $scope.patrimonioPessoa = {};
        //console.log($scope.rendaPessoa);

    };

    $scope.editarPatrimonio = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.patrimonioPessoa = $scope.pessoaFisica.dadosPatrimonio[index];
        $scope.pessoaFisica.dadosPatrimonio.splice(index, 1);

    };

    $scope.removerPatrimonio = function (index) {
        // implementar confirmação para remover
        $scope.pessoaFisica.dadosPatrimonio.splice(index, 1);
    };
    // Fim dados patrimonio    

// Dados endividamento
    $scope.adicionaEndividamento = function () {
        //console.log($scope.pessoaFisica);
        if (!$scope.pessoaFisica.dadosEndividamento) {
            $scope.pessoaFisica.dadosEndividamento = new Array();
        }
        $scope.pessoaFisica.dadosEndividamento.push($scope.endividamentoPessoa);
        $scope.endividamentoPessoa = {};
        //console.log($scope.rendaPessoa);

    };

    $scope.editarEndividamento = function (index) {
        //$scope.bancoPessoa = banco;
        $scope.endividamentoPessoa = $scope.pessoaFisica.dadosEndividamento[index];
        $scope.pessoaFisica.dadosEndividamento.splice(index, 1);

    };

    $scope.removerEndividamento = function (index) {
        // implementar confirmação para remover
        $scope.pessoaFisica.dadosEndividamento.splice(index, 1);
    };
    // Fim dados endividamento  



    $scope.buscaCEP = function () {
        if ($scope.pessoaFisica.cep) {
            $http({
                method: 'GET',
                url: 'https://viacep.com.br/ws/' + $scope.pessoaFisica.cep + '/json'
            }).then(function (response) {
                $scope.pessoaFisica.rua = response.data.logradouro;
                $scope.pessoaFisica.bairro = response.data.bairro;
                $scope.pessoaFisica.uf = response.data.uf;
                $scope.pessoaFisica.cidade = response.data.localidade;
            }, function (response) {

            });
        } else {
            messageService.cepInvalido();
        }

    };
    $scope.buscaCEPRenda = function () {
        if ($scope.rendaPessoa.cep) {
            $http({
                method: 'GET',
                url: 'https://viacep.com.br/ws/' + $scope.rendaPessoa.cep + '/json'
            }).then(function (response) {
                $scope.rendaPessoa.rua = response.data.logradouro;
                $scope.rendaPessoa.bairro = response.data.bairro;
                $scope.rendaPessoa.uf = response.data.uf;
                $scope.rendaPessoa.cidade = response.data.localidade;
            }, function (response) {

            });
        } else {
            messageService.cepInvalido();
        }

    };



    $scope.buscaConjuge = function () {

        if ($scope.pessoaFisica.conjuge) {
            //console.log('cpf informado');
            $http({
                method: 'GET',
                url: 'api/modulo-gi/pessoa-fisica/cpf/' + $scope.pessoaFisica.conjuge.cpf
            }).then(function (response) {
                if (response.data) {
                    $scope.pessoaFisica.conjuge.id = response.data.id;
                    $scope.pessoaFisica.conjuge.cpf = response.data.cpf;
                    $scope.pessoaFisica.conjuge.nome = response.data.nome;
                } else {
                    $scope.pessoaFisica.conjuge.cpf = '';
                    $scope.pessoaFisica.conjuge.nome = '';
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
    
    $scope.carregaCategoriaProfissional = function () {
        $http({
            method: 'GET',
            url: '/api/modulo-gi/tipo-categoria-profissional'
        }).then(function (response) {
            $scope.categoriaProfissional = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.carregaCategoriaProfissional();      



});
