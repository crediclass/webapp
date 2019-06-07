app.controller("listaOportunidadeController", function ($scope, $http, $location, messageService) {

    $scope.oportunidade = {};
    $scope.oportunidades = [];



    var baseUrl = 'api/modulo-gi/oportunidade';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.oportunidades = response.data;
            console.log($scope.oportunidades);
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();


    $scope.editarOportunidade = function (value) {
        $location.path('/console/gi/cadastro/oportuniade/'+ value.id );
       
    };




});
