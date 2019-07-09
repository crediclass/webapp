app.factory('oportunidadeService', function ($http) {
    var service = {};


    service.getProponenteByCnpj = function (cnpj) {
        var url = 'api/modulo-gi/pessoa-juridica/cnpj?cnpj=' + cnpj;
        return $http.get(url);

    };
    service.getProponenteByCpf = function (cpf) {
        var url = 'api/modulo-gi/pessoa-fisica/cpf/' + cpf;
        return $http.get(url);
    };

    service.getDocumentoProponentePessoa = function (pessoaId) {
        var url = 'api/modulo-gi/doc-agrupamento/doc-pessoa/' + pessoaId;
        return $http.get(url);
    };
    service.getDocumentoVendedorPessoa = function (pessoaId) {
        var url = 'api/modulo-gi/doc-agrupamento/doc-vendedor/' + pessoaId;
        return $http.get(url);
    };
    service.getDocumentoProcuradorPessoa = function (pessoaId) {
        var url = 'api/modulo-gi/doc-agrupamento/doc-procurador/' + pessoaId;
        return $http.get(url);
    };

    service.getDocumentoProponente = function () {
        var url = 'api/modulo-gi/doc-agrupamento';
        return $http.get(url);
    };
    
    service.get = function (url) {        
        return $http.get(url);
    };


    return service;
});
