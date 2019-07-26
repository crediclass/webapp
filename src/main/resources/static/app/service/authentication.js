app.factory('authAPI', function ($http) {

    service = {};

    var usuario = {};

    service.getUsuario = function () {
        return usuario;

    };

    service.setUsuario = function (value) {
        usuario.id = value;
        
    };

    service.authenticate = function (params) {
        var request = {
            url: '/login',
            method: 'POST',
            headers: {'Content-Type': 'application/x-www-form-urlencoded'},
            data: $.param(params)
        };
        return $http(request);

    };



    return service;

});
