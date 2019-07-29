app.factory('authAPI', function ($http) {

    service = {};

    var usuario = {};

    service.getUsuario = function () {
        return usuario;

    };

    service.setUsuario = function (id, name) {
        usuario.id = id;
        usuario.name = name;
        
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
