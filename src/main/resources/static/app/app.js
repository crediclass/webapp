
var app = angular.module('app', [
    'ngRoute',
    'ngResource',
    'ui.utils.masks',
    'ui.bootstrap',
    'ngAnimate',
    'datatables']);

app.config(function ($routeProvider, $locationProvider)
{
    // remove o # da url
    $locationProvider.html5Mode(true);

    $routeProvider

            // para a rota '/', carregaremos o template home.html e o controller 'HomeCtrl'
            .when('/', {
                templateUrl: 'view/home.html',
                controller: 'HomeCtrl',
            })

            // Módulo Administração

            .when('/console/administracao/usuario', {
                templateUrl: 'view/usuario.html',
                controller: 'usuarioController',
            })

            .when('/console/administracao/grupo-usuario', {
                templateUrl: 'view/permissao-usuario.html',
                controller: 'permissaoUsuarioController',
            })

            // Módulo Consórcio - Cadastro

            .when('/console/consorcio/administradora', {
                templateUrl: 'view/administradora.html',
                controller: 'administradoraController',
            })

            .when('/console/consorcio/indexador-grupo-consorcio', {
                templateUrl: 'view/indexador-grupo-consorcio.html',
                controller: 'indexadorGrupoConsorcioController',
            })

            .when('/console/consorcio/tipo-parcela', {
                templateUrl: 'view/tipo-parcela.html',
                controller: 'tipoParcelaController',
            })

            .when('/console/consorcio/grupo-consorcio', {
                templateUrl: 'view/grupo-consorcio.html',
                controller: 'grupoConsorcioController',
            })

            .when('/console/consorcio/periodo-lances', {
                templateUrl: 'view/periodo-lances.html',
                controller: 'periodoLancesController',
            })

            .when('/console/consorcio/lance-consorcio', {
                templateUrl: 'view/lance-consorcio.html',
                controller: 'lanceConsorcioController',
            })
                       
            // Módulo Consórcio - Análise
            .when('/console/consorcio/analise-de-grupo', {
                templateUrl: 'view/analise-grupo-consorcio.html',
                controller: 'analiseGrupoConsorcioController',
            }) 


            // Módulo GI 
            
            // Cadastro

            .when('/console/gi/cadastro/pessoa-fisica/:pessoaId?', {
                templateUrl: 'view/cadastro-pessoa-fisica.html',
                controller: 'cadastroPessoaFisicaController',
            })
            .when('/console/gi/listar/pessoa-fisica', {
                templateUrl: 'view/listar-pessoa-fisica.html',
                controller: 'listaPessoaFisicaController',
            })
            .when('/console/gi/cadastro/pessoa-juridica/:pessoaId?', {
                templateUrl: 'view/cadastro-pessoa-juridica.html',
                controller: 'cadastroPessoaJuridicaController',
            })            
            .when('/console/gi/cadastro/pessoa-juridica', {
                templateUrl: 'view/cadastro-pessoa-juridica.html',
                controller: 'cadastroPessoaJuridicaController',
            })
           .when('/console/gi/listar/pessoa-juridica', {
                templateUrl: 'view/listar-pessoa-juridica.html',
                controller: 'listaPessoaJuridicaController',
            })            
            .when('/console/gi/cadastro/banco', {
                templateUrl: 'view/cadastro-banco.html',
                controller: 'cadastroBancoController',
            })
            .when('/console/gi/cadastro/estado-civil', {
                templateUrl: 'view/cadastro-estado-civil.html',
                controller: 'cadastroEstadoCivilController',
            })
            .when('/console/gi/cadastro/tipo-comprovante-renda', {
                templateUrl: 'view/cadastro-tipo-comprovante-renda.html',
                controller: 'cadastroComprovanteRendaController',
            })
            .when('/console/gi/cadastro/tipo-ativo', {
                templateUrl: 'view/cadastro-tipo-ativo.html',
                controller: 'cadastroTipoAtivoController',
            })
            .when('/console/gi/cadastro/tipo-divida', {
                templateUrl: 'view/cadastro-tipo-divida.html',
                controller: 'cadastroTipoDividaController',
            })
            .when('/console/gi/cadastro/tipo-situacao-doc', {
                templateUrl: 'view/cadastro-tipo-situacao-doc.html',
                controller: 'cadastroTipoSituacaoDocController',
            })
            .when('/console/gi/cadastro/tipo-situacao-patrimonio', {
                templateUrl: 'view/cadastro-tipo-situacao-patrimonio.html',
                controller: 'cadastroTipoSituacaoPatrimonioController',
            })
            .when('/console/gi/cadastro/tipo-patrimonio', {
                templateUrl: 'view/cadastro-tipo-patrimonio.html',
                controller: 'cadastroTipoPatrimonioController',
            })
            .when('/console/gi/cadastro/tipo-categoria-profissional', {
                templateUrl: 'view/cadastro-tipo-categoria-profissional.html',
                controller: 'cadastroCategoriaProfissionalController',
            })
            .when('/console/gi/cadastro/cadastro-agrupamento-documento', {
                templateUrl: 'view/cadastro-agrupamento-documento.html',
                controller: 'cadastroAgrupamentoDocumentoController',
            })
            .when('/console/gi/cadastro/cadastro-documento-proponente', {
                templateUrl: 'view/cadastro-documento-proponente.html',
                controller: 'cadastroDocumentoProponenteController',
            })
            .when('/console/gi/cadastro/cadastro-documento-vendedor', {
                templateUrl: 'view/cadastro-documento-vendedor.html',
                controller: 'cadastroDocumentoVendedorController',
            })
            .when('/console/gi/cadastro/cadastro-documento-procurador', {
                templateUrl: 'view/cadastro-documento-procurador.html',
                controller: 'cadastroDocumentoProcuradorController',
            })
            
            // Oportunidade
            
            .when('/console/gi/oportunidade/cadastrar/:oportunidadeId?', {
                templateUrl: 'view/cadastro-oportunidade.html',
                controller: 'cadastroOportunidadeController',
            })
                   
            .when('/console/gi/oportunidade/listar-oportunidade', {
                templateUrl: 'view/listar-oportunidade.html',
                controller: 'listaOportunidadeController',
            })    
            
          


            // Módulo RH - Cadastro

            .when('/console/rh/pesquisa', {
                templateUrl: 'view/pesquisa.html',
                controller: 'pesquisaRhController',
            })


//
//            .when('/contato', {
//                templateUrl: 'view/home.html',
//                controller: 'HomeCtrl',
//            })
//
            .when('/login', {
                templateUrl: 'view/login.html',
                controller: 'HomeCtrl',
            })

            // caso não seja nenhum desses, redirecione para a rota '/'
            .otherwise({redirectTo: '/'});
});

app.controller('HomeCtrl', function ($scope) {});
