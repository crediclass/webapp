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


    return service;
});
