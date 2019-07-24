app.controller('usuarioController', function ($scope, $http, messageService) {

    $scope.usuario = {};
    $scope.usuarios = [];
    $scope.permissoes = [];
    $scope.checked_permissoes = [];
    var baseUrl = '/api/administracao/usuarios';


    var switchBtnDocumentoVencido = angular.element("#documentoVencido");
    if (switchBtnDocumentoVencido) {
        switchBtnDocumentoVencido.bootstrapToggle();
        switchBtnDocumentoVencido.change(function () {
            $scope.usuario.isDocumentoVencido = $(this).prop('checked');
        });

    }
    var switchBtnGrupoVencido = angular.element("#grupoVencido");
    if (switchBtnGrupoVencido) {
        switchBtnGrupoVencido.bootstrapToggle();
        switchBtnGrupoVencido.change(function () {
            $scope.usuario.isGrupoVencido = $(this).prop('checked');
        });

    }



    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.usuarios = response.data;
            //console.log($scope.usuarios);
        }, function (response) {
            messageService.error();
        });

    };
    $scope.findAll();




    $scope.save = function () {
        $scope.usuario.permissao = new Array();

        for (var i = 0, counter = $scope.checked_permissoes.length; i < counter; i++) {
            let permissao = {};
            permissao.id = $scope.checked_permissoes[i];
            $scope.usuario.permissao.push(permissao);
        }
        //console.log($scope.usuario);

        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.usuario
        }).then(function (response) {
            $scope.findAll();
            $scope.checked_permissoes = [];
            messageService.save();
        }, function (response) {
            messageService.error();
        });
    };


    $scope.edit = function (user) {
        $scope.usuario = angular.copy(user);
        for (var i = 0, counter = $scope.usuario.permissao.length; i < counter; i++) {
            if ($scope.checked_permissoes.indexOf($scope.usuario.permissao[i].id) != -1)
                return;
            $scope.checked_permissoes.push($scope.usuario.permissao[i].id.toString());
        }





    };


    $scope.delete = function (id) {
        $http({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(function (response) {
            $scope.findAll();
        }, function (response) {
            //console.log(response);
            messageService.delete();
        });
    };

    getAllPermissoes = function () {
        $http({
            method: 'GET',
            url: '/api/administracao/grupo-usuarios'
        }).then(function (response) {
            $scope.permissoes = response.data;
            console.log($scope.permissoes);
        }, function (response) {
            messageService.error();
        });

    };

    getAllPermissoes();



});

app.directive('checkList', function () {
    return {
        scope: {
            list: '=checkList',
            value: '@'
        },
        link: function (scope, elem, attrs) {
            var handler = function (setup) {
                var checked = elem.prop('checked');
                var index = scope.list.indexOf(scope.value);

                if (checked && index == -1) {
                    if (setup)
                        elem.prop('checked', false);
                    else
                        scope.list.push(scope.value);
                } else if (!checked && index != -1) {
                    if (setup)
                        elem.prop('checked', true);
                    else
                        scope.list.splice(index, 1);
                }
            };

            var setupHandler = handler.bind(null, true);
            var changeHandler = handler.bind(null, false);

            elem.on('change', function () {
                scope.$apply(changeHandler);
            });
            scope.$watch('list', setupHandler, true);
        }
    };
});

