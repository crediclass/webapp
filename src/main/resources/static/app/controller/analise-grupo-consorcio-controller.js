//Controller da view administradora.html
app.controller("analiseGrupoConsorcioController", function ($scope, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $http, $q) {
    $scope.grupos = [];
    $scope.parcelas = [];
    $scope.pcomposicao = [];
    $scope.headCells = [];
    $scope.rows = [];

    var baseUrl = '/api/consorcio/analise-grupos';

    $scope.getGrupos = function () {
        $http.get(baseUrl)
                .then(function (response) {
                    $scope.grupos = response.data;
                    
                });
    };

    $scope.getGrupos();



    //AJAX version
//    $scope.vo = {};
//    $scope.vo.dtInstance = {};
//    $scope.vo.dtOptions = DTOptionsBuilder.fromFnPromise(function () {
//        var defer = $q.defer();
//        $http.get(baseUrl).then(function (result) {
//            defer.resolve(result.data);
//        });
//        return defer.promise;
//    }).withOption('paging', true)
//            .withOption('searching', true)
//            .withOption('info', false)
//            .withLanguageSource('https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json');
//
//    $scope.vo.dtColumns = [
//        DTColumnBuilder.newColumn(null).withTitle('Ação').notSortable().renderWith(actionsHtml),
//        DTColumnBuilder.newColumn('administradora').withTitle('Administradora'),
//        DTColumnBuilder.newColumn('grupo', 'Grupo'),
//        DTColumnBuilder.newColumn('data_inauguracao', 'Data Inau.'),
//        DTColumnBuilder.newColumn('prazo_decorrido', 'Prazo Dec'),
//        DTColumnBuilder.newColumn('prazo_decorrido', 'Prazo Dec'),
//        DTColumnBuilder.newColumn('prazo_remanescente', 'Prazo Rem'),
//        DTColumnBuilder.newColumn('tx_adminitracao', 'Taxa Adm'),
//        DTColumnBuilder.newColumn('tx_administracao_anual', 'Taxa Adm <br/> Anual'),
//        DTColumnBuilder.newColumn('tx_lance_embutido', 'Lance Emb'),
//        DTColumnBuilder.newColumn('isSeguro_Opcional', 'Seguro'),
//        DTColumnBuilder.newColumn('tipo_parcela', 'Tipo Parcela')
//    ];
//    

    function actionsHtml(data, type, full, meta) {
        vo.parcelas[data.id] = data;

        return '<button ng-click="openModalComposicaoParcela(g) type="button" class="btn btn-warning btn-sm" title="Parcelas">' +
                '<span class="icon-coin-dollar" aria-hidden="true"></span>' +
                '</button>';
    }

    $scope.vm = {};
    $scope.vm.dtInstance = {};

    $scope.vm.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(0).notSortable()];

    $scope.vm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('paging', false)
            .withOption('searching', true)
            .withOption('info', false)
            .withOption('scrollX', true)
            .withDOM('<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>')
            .withLanguageSource('https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json');



    $scope.vmm = {};
    $scope.vmm.dtInstance = {};

    $scope.vmm.dtColumnDefs = [DTColumnDefBuilder.newColumnDef(2).notSortable()];

    $scope.vmm.dtOptions = DTOptionsBuilder.newOptions()
            .withOption('paging', false)
            .withOption('searching', true)
            .withOption('info', true)
            //.withOption('scrollX', true)
            .withDOM('<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>')
            .withLanguageSource('https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json');



    $scope.sortByParcelaProp = function (values) {
        return _.sortBy(values, function (value) {
            return value.parcela;
        });
    };



    $scope.openModalComposicaoParcela = function (grupo) {
        $http.get('/api/consorcio/composicao-parcelas/' + grupo.id)
                .then(function (response) {
                    var items = response.data;
                    
                    $scope.headCells = _.keys(_.groupBy(items, function (item) {
                        return item.parcela
                    }));
                    $scope.rows = _.groupBy(items, function (item) {
                        return item.credito
                    });
                    
                    //console.log(items);
                    
                });
        var frmComposicao = angular.element("#modal_composicao_parcela");
        if (frmComposicao) {
            frmComposicao.modal("show");
        }
        
        var switchBtn = angular.element(".form-check-input-switch");
        if (switchBtn) {
            switchBtn.bootstrapToggle();
        }

    };




});

app.filter('seguroObrigatorio', function () {
    return function (val) {
        if (!val)
            return 'Não';
        return 'Sim';
    };
});


app.directive('semSeguro', function(){
    return {
        template: ' Olá Fabiano '
    };
});



