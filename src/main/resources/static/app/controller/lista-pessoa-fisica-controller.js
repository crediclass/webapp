app.controller("listaPessoaFisicaController", function ($scope, $http, $location, messageService) {

    $scope.pessoaFisica = {};
    $scope.pessoaFisicas = [];



    var baseUrl = 'api/modulo-gi/pessoa-fisica';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.pessoaFisicas = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();


    $scope.editarPessoaFisica = function (pessoa) {
        $location.path('/console/gi/cadastro/pessoa-fisica/'+ pessoa.id );
       
    };




});
