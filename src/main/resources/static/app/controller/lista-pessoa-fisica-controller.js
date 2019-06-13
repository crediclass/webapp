app.controller("listaPessoaFisicaController", function ($scope, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $http, $q, $location, messageService) {

    $scope.pessoaFisica = {};
    $scope.pessoaFisicas = [];
    
    $scope.vm = {};
    $scope.vm.dtInstance = {};
    $scope.vm.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(0).notSortable()];

    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('paging', true)
            .withOption('searching', true)
            .withOption('info', false)
            //.withOption('scrollX', true)
            .withDOM('<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>')
            .withLanguageSource('https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json');


    



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
