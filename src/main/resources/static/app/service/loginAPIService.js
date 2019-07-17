app.service('login', function($http){  
    this.login = function (username, password) {
        return http({
            method: 'POST',
            url: "login",
            data: "username=" + username + "&password=" + password,
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        });
    };         
});
