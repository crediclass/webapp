app.controller('grupoConsorcioController', function ($scope, DTOptionsBuilder, DTColumnBuilder, DTColumnDefBuilder, $http, $q, messageService) {
    var baseUrl = '/console/consorcio/grupos';
    $scope.grupo = {};
    $scope.grupos = [];
    $scope.administradoras = [];
    $scope.indexadores = [];
    $scope.credito = {};
    $scope.creditos = [];
    $scope.parcela = {};
    $scope.parcelas = [];
    $scope.tipoParcelas = [];


    var data_inauguracao = angular.element("#data_inauguracao");
    if (data_inauguracao) {
        data_inauguracao.mask('00-00-0000');
    }

    $scope.openModalCredito = function (grupo) {
        $scope.grupo = angular.copy(grupo);
        $scope.creditos = $scope.grupo.creditos;
        var frmCredito = angular.element("#modal_form_credito");
        if (frmCredito) {
            frmCredito.modal({
                backdrop: 'static',
                keyboard: false
            });
        }
    };


    $scope.openModalParcela = function (grupo) {
        $scope.grupo = angular.copy(grupo);
        $scope.parcelas = $scope.grupo.parcelas;
        $scope.parcelas.sort(dynamicSort("parcela"));
        var frmParcela = angular.element("#modal_form_parcela");
        if (frmParcela) {

            frmParcela.modal({
                backdrop: 'static',
                keyboard: false
            });
        }
    };


    $scope.insertCredito = function () {
        $scope.creditos.push($scope.credito);
        $scope.credito = {};

    };
    $scope.insertParcela = function () {
        let parcela_min = $scope.parcela.parcela;
        let parcela_max = $scope.parcela.parcela;
        parcela_min = parcela_min.split("-")[0];
        parcela_max = parcela_max.split("-")[1];

        if (parseInt(parcela_min, 10) > parseInt($scope.grupo.prazo_remanescente, 10) && parseInt(parcela_max, 10) > parseInt($scope.grupo.prazo_remanescente, 10)) {
            new Noty({
                theme: ' alert alert-danger alert-styled-left p-0 bg-white',
                text: 'Ops, O intervalo da parcela não pode ser maior que o prazo remanescente!',
                type: 'error',
                timeout: 1500,
                closeWith: ['button']
            }).show();
        } else if (parseInt(parcela_max, 10) > parseInt($scope.grupo.prazo_remanescente, 10)) {
            new Noty({
                theme: ' alert alert-danger alert-styled-left p-0 bg-white',
                text: 'Ops, O intervalo da parcela não pode ser maior que o prazo remanescente!',
                type: 'error',
                timeout: 1500,
                closeWith: ['button']
            }).show();
        } else {
            updateTotal();            
            $scope.parcelas.push($scope.parcela);
            $scope.parcelas.sort(dynamicSort("parcela"));            
            $scope.parcela = {};
        }
    };

    $scope.removeParcela = function (index) {
        $scope.parcelas.splice(index, 1);
    };

    $scope.removeCredito = function (index) {
        $scope.creditos.splice(index, 1);
    };

    $scope.editParcela = function (index) {
        $scope.parcela = angular.copy($scope.parcelas[index]);
        $scope.parcelas.splice(index, 1);

    };
    $scope.editCredito = function (index) {
        $scope.credito = angular.copy($scope.creditos[index]);
        $scope.creditos.splice(index, 1);
    };

    updateTotal = function () {
        let parcela_adm = $scope.parcela.parcela;
        parcela_adm = (parcela_adm.split("-")[1] - parcela_adm.split("-")[0]) + 1;
        $scope.parcela.intervalo_parcela = parcela_adm;
        $scope.parcela.tx_administracao_mensal = $scope.parcela.tx_administracao / parcela_adm;
        $scope.parcela.tx_fundo_comum = 1 / $scope.grupo.prazo_remanescente;
        $scope.parcela.tx_fundo_reserva = $scope.grupo.tx_fundo_reserva / $scope.grupo.prazo_remanescente;

        $scope.parcela.tx_total = $scope.parcela.tx_administracao_mensal + $scope.parcela.tx_fundo_comum + $scope.parcela.tx_fundo_reserva;
    };


    dynamicSort = function (property) {
        var sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a, b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
    }

    $scope.findAll = function () {
        $http({
            method: 'GET',
            url: baseUrl
        }).then(function (response) {
            $scope.grupos = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    $scope.saveComposicaoParcela = function () {

        let array = $scope.grupo.parcelas;
        let somaTxAdm = 0;
        for (y in array) {
            somaTxAdm += array[y].tx_administracao;
        }

        if (parseFloat(somaTxAdm) != parseFloat($scope.grupo.tx_adminitracao)) {
            angular.element("#salvarComposicaoParcela").removeAttr("data-dismiss");
            new Noty({
                theme: ' alert alert-danger alert-styled-left p-0 bg-white',
                text: 'Ops, Não foi possível salvar a composição da parcela. A a soma das taxas informadas precisa ser igual a taxa de administração total do grupo',
                type: 'error',
                timeout: 2500,
                closeWith: ['button']
            }).show();
        } else {
            //data-dismiss="modal"
            angular.element("#salvarComposicaoParcela").attr("data-dismiss", "modal");
            $http({
                method: 'POST',
                url: baseUrl,
                data: $scope.grupo
            }).then(function (response) {
                console.log($scope.grupo);
                messageService.save();
                $scope.findAll();
                $scope.grupo = {};
            }, function (response) {
                messageService.error();
            });
        }





    };


    $scope.save = function () {
        $http({
            method: 'POST',
            url: baseUrl,
            data: $scope.grupo
        }).then(function (response) {
            messageService.save();
            $scope.findAll();
            $scope.grupo = {};
        }, function (response) {
            messageService.error();
        });

    };

    $scope.edit = function (grupo) {
        $scope.grupo = angular.copy(grupo);
    };

    $scope.delete = function (id) {
        $http({
            method: 'DELETE',
            url: baseUrl + '/' + id
        }).then(function (response) {
            messageService.delete();
            $scope.findAll();
        }, function (response) {
            messageService.error();
            //$window.alert("Opsss, não foi possível remover! ");
        });
    };


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


    getAllTipoParcelas = function () {
        $http({
            method: 'GET',
            url: '/api/consorcio/tipo-parcela'
        }).then(function (response) {
            $scope.tipoParcelas = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    getAllIndexadores = function () {
        $http({
            method: 'GET',
            url: '/api/consorcio/indexadores'
        }).then(function (response) {
            $scope.indexadores = response.data;
        }, function (response) {
            messageService.error();
        });

    };

    getAllTipoParcelas();
    getAllAdministradoras();
    getAllIndexadores();


    $scope.findAll();



});