app.controller("listaPessoaJuridicaController", function ($scope, $http, $location, messageService) {

    $scope.pessoaJuridica = {};
    $scope.pessoaJuridicas = [];



    var baseUrl = 'api/modulo-gi/pessoa-juridica';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.pessoaJuridicas = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();


    $scope.editarPessoaJuridica = function (pessoa) {
        $location.path('/console/gi/cadastro/pessoa-juridica/'+ pessoa.id );
       
    };




});
