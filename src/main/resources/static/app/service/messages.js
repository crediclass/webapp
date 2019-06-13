app.factory('messageService', function () {
    var service = {};


    service.save = function () {
        new Noty({
            theme: ' alert alert-success alert-styled-left p-0 bg-white',
            text: 'Dados salvo com sucesso!',
            type: 'success',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };
    service.delete = function () {
        new Noty({
            theme: ' alert alert-success alert-styled-left p-0 bg-white',
            text: 'Removido com sucesso!',
            type: 'success',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };
    service.error = function () {
        new Noty({
            theme: ' alert alert-danger alert-styled-left p-0 bg-white',
            text: 'Ops, não foi possível realizar operação desejada!',
            type: 'error',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };


    service.cepInvalido = function () {
        new Noty({
            theme: ' alert alert-danger alert-styled-left p-0 bg-white',
            text: 'Ops, o cep informado é inválido!',
            type: 'error',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };
    
    service.cpfNaoEncontrado = function () {
        new Noty({
            theme: ' alert alert-danger alert-styled-left p-0 bg-white',
            text: 'Ops, o CPF informado não foi encontrado!',
            type: 'error',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };
    
    service.cnpjNaoEncontrado = function () {
        new Noty({
            theme: ' alert alert-danger alert-styled-left p-0 bg-white',
            text: 'Ops, o CNPJ informado não foi encontrado!',
            type: 'error',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };
    service.cepNaoEncontrado = function () {
        new Noty({
            theme: ' alert alert-danger alert-styled-left p-0 bg-white',
            text: 'Ops, o cep informado não foi encontrado!',
            type: 'error',
            timeout: 2500,
            closeWith: ['button']

        }).show();
    };

    return service;
});
