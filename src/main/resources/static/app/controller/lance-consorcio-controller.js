//Controller da view lance-consorcio.html
app.controller("lanceConsorcioController", function ($scope, $http, messageService) {
    $scope.grupos = [];
    $scope.periodoLances = [];
    $scope.dataLances = {};
    $scope.headCells = [];
    $scope.detalhes = {
        valor: 0
    };


    $scope.administradoras = [];


    $scope.carregaGrupo = function (administradora) {
        let periodo = $scope.dataLances.valor.valor;
        $http({
            method: 'GET',
            url: 'console/consorcio/grupos/administradora/periodo?administradora=' + administradora.id + '&periodo=' + periodo
        }).then(function (response) {
            $scope.grupos = response.data;
            // Não possui nenhum grupo com o periodo 
            if (response.data.length == 0) {
                $http({
                    method: 'GET',
                    url: 'console/consorcio/grupos/administradora/' + administradora.id
                }).then(function (response) {
                    $scope.grupos = [];
                    $scope.grupos = response.data;

                }, function (response) {
                    messageService.error();
                });
            }


            let index;
            for (index = 0; index < $scope.grupos.length; ++index) {
                if (!$scope.grupos[index].lances) {
                    $scope.grupos[index].lances = new Array();

                }
            }





        }, function (response) {
            messageService.error();
        });





    };

    $scope.insertLance = function (grupo) {


        // Pega o valor do lance e adiciona aos detalhes.
        $scope.detalhes.valor = grupo.lances[0].valorLance;
        grupo.lances[0].periodo = $scope.dataLances.valor;


        // Verifica se existe algum detalhe de lance cadastrado        
        if (grupo.lances[0].detalhes) { // possui detalhes no grupo
            grupo.lances[0].detalhes.push(angular.copy($scope.detalhes));
        } else { // não possui detalhes e cria o array           
            grupo.lances[0].detalhes = new Array();
            grupo.lances[0].detalhes.push(angular.copy($scope.detalhes));
            console.log(grupo.lances[0]);

        }

        // zera o valor do lance
        grupo.lances[0].valorLance = null;
    };


    $scope.carregaPorPeriodo = function () {
        $http({
            method: 'GET',
            url: '/console/consorcio/grupos/periodo/' + $scope.dataLances.valor.valor
        }).then(function (response) {
            $scope.grupos = response.data;
        }, function (response) {
            messageService.error();
        });
    };






    $scope.save = function (grupo) {
        console.log(grupo);
        $http({
            method: 'POST',
            url: '/console/consorcio/grupos',
            data: grupo
        }).then(function (response) {
            messageService.save();
        }, function (response) {
            messageService.error();
        });

    };

    getAllAdministradoras = function () {
        $http({
            method: 'GET',
            url: '/console/consorcio/administradoras'
        }).then(function (response) {
            $scope.administradoras = response.data;
        }, function (response) {
            messageService.error();
        });

    };
    getAllAdministradoras();


    getAllGrupos = function () {
        $http({
            method: 'GET',
            url: '/console/consorcio/grupos'
        }).then(function (response) {
            $scope.grupos = response.data;
        }, function (response) {
            messageService.error();
        });

    };
    //getAllGrupos();

    getAllPeriodoLances = function () {
        $http({
            method: 'GET',
            url: '/api/consorcio/periodo-lances'
        }).then(function (response) {
            $scope.periodoLances = response.data;
        }, function (response) {
            messageService.error();
        });

    };
    getAllPeriodoLances();




});
