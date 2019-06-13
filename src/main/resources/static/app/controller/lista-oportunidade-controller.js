app.controller("listaOportunidadeController", function ($scope, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $http, $q, $location, messageService) {

    $scope.oportunidade = {};
    $scope.oportunidades = [];

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







    var baseUrl = 'api/modulo-gi/oportunidade';

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.oportunidades = response.data;
            //console.log($scope.oportunidades);
        }, function (response) {
            messageService.error();
        });

    };

    $scope.findAll();


    $scope.editarOportunidade = function (value) {
        $location.path('/console/gi/oportunidade/cadastrar/' + value.id);

    };




});

app.filter('isAtivoFiltro', function ($sce) {
    return function (val) {
        if (!val)
            return $sce.trustAsHtml('<span class="badge badge-danger">Inativo</span>');

        return $sce.trustAsHtml('<span class="badge badge-success">Ativo</span>');
    };
});
