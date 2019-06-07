app.factory('authAPI', function ($http) {
    return {
        authenticate: function (params) {
            var request = {
                url: '/login',
                method: 'POST',
                headers: {'Content-Type': 'application/x-www-form-urlencoded'},
                data: $.param(params)
            };
            return $http(request);
        }
    };
});
