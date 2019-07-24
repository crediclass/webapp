app.factory('oportunidadeService', function ($q, $http) {
    var service = {};

    service.getProponenteByCnpj = function (cnpj) {
        var url = 'api/modulo-gi/pessoa-juridica/cnpj?cnpj=' + cnpj;
        return $http.get(url);

    };
    service.getProponenteByCpf = function (cpf) {
        var url = 'api/modulo-gi/pessoa-fisica/cpf/' + cpf;
        return $http.get(url);
    };

    service.call = function (url) {
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
    service.getDocumentoBemObjetoOportunidade = function (oportunidadeId) {
        var url = 'api/modulo-gi/doc-agrupamento/doc-bem-objeto/' + oportunidadeId;
        return $http.get(url);
    };
    service.getDocumentoOperacaoOportunidade = function (oportunidadeId) {
        var url = 'api/modulo-gi/doc-agrupamento/doc-operacao/' + oportunidadeId;
        return $http.get(url);
    };

    service.getDocumentoProponente = function () {
        var url = 'api/modulo-gi/doc-agrupamento';
        return $http.get(url);
    };

    service.get = function (url) {
        return $http.get(url);
    };

    service.documentosProponente = function (oportunidadeId, pessoaId) {
        var deferred = $q.defer();
        $http.get('/api/modulo-gi/doc-agrupamento/').then(
                function (response, status, headers, config) {
                    //console.log('1');
                    //console.log(response.data);
                    for (var i = 0, len = response.data.length; i < len; i++) {
                        for (var a = 0, counter = response.data[i].documentosProponente.length; a < counter; a++) {
                            if (response.data[i].documentosProponente[a].documento.length < 1) {

                                json = {
                                    "documento": {
                                        "id": response.data[i].documentosProponente[a].id},
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

                    }
                    deferred.resolve(response);
                },
                function (data, status, headers, config) {
                    deferred.reject(status);
                }
        );
        return deferred.promise;
    };

    service.documentosVendedor = function (oportunidadeId, pessoaId) {
        var deferred = $q.defer();
        $http.get('/api/modulo-gi/doc-agrupamento/').then(
                function (response, status, headers, config) {
                    //console.log('1');
                    //console.log(response.data);
                    for (var i = 0, len = response.data.length; i < len; i++) {
                        for (var a = 0, counter = response.data[i].documentosVendedor.length; a < counter; a++) {
                            if (response.data[i].documentosVendedor[a].documento.length < 1) {

                                json = {
                                    "documento": {
                                        "id": response.data[i].documentosVendedor[a].id},
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

                    }
                    deferred.resolve(response);
                },
                function (data, status, headers, config) {
                    deferred.reject(status);
                }
        );
        return deferred.promise;
    };

    service.documentosProcurador = function (oportunidadeId, pessoaId) {
        var deferred = $q.defer();
        $http.get('/api/modulo-gi/doc-agrupamento/').then(
                function (response, status, headers, config) {
                    //console.log('1');
                    //console.log(response.data);
                    for (var i = 0, len = response.data.length; i < len; i++) {
                        for (var a = 0, counter = response.data[i].documentosProcurador.length; a < counter; a++) {
                            if (response.data[i].documentosProcurador[a].documento.length < 1) {

                                json = {
                                    "documento": {
                                        "id": response.data[i].documentosProcurador[a].id},
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

                    }
                    deferred.resolve(response);
                },
                function (data, status, headers, config) {
                    deferred.reject(status);
                }
        );
        return deferred.promise;
    };

    service.documentosBemObjeto = function (oportunidadeId) {
        var deferred = $q.defer();
        $http.get('/api/modulo-gi/doc-agrupamento/').then(
                function (response, status, headers, config) {
                    console.log('1');
                    //console.log(response.data);
                    for (var i = 0, len = response.data.length; i < len; i++) {
                        for (var a = 0, counter = response.data[i].documentosBemObjeto.length; a < counter; a++) {
                            if (response.data[i].documentosBemObjeto[a].documento.length < 1) {

                                json = {
                                    "documento": {
                                        "id": response.data[i].documentosBemObjeto[a].id},
                                    "oportunidade": {
                                        "id": oportunidadeId
                                    }
                                };

                                $http({
                                    method: 'POST',
                                    url: 'api/modulo-gi/doc-bem-objeto-dados',
                                    data: json
                                });

                            }

                        }

                    }
                    deferred.resolve(response);
                },
                function (data, status, headers, config) {
                    deferred.reject(status);
                }
        );
        return deferred.promise;
    };

    service.documentosOperacao = function (oportunidadeId) {
        var deferred = $q.defer();
        $http.get('/api/modulo-gi/doc-agrupamento/').then(
                function (response, status, headers, config) {                                        
                    for (var i = 0, len = response.data.length; i < len; i++) {
                        //console.log(response.data);
                        for (var a = 0, counter = response.data[i].documentosOperacao.length; a < counter; a++) {
                            if (response.data[i].documentosOperacao[a].documento.length < 1) {

                                json = {
                                    "documento": {
                                        "id": response.data[i].documentosOperacao[a].id},
                                    "oportunidade": {
                                        "id": oportunidadeId
                                    }
                                };
                                //console.log(json);

                                $http({
                                    method: 'POST',
                                    url: 'api/modulo-gi/doc-operacao-dados',
                                    data: json
                                });

                            }

                        }

                    }
                    deferred.resolve(response);
                },
                function (data, status, headers, config) {
                    deferred.reject(status);
                }
        );
        return deferred.promise;
    };


    return service;
});
