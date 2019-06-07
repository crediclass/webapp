//Controller da view pesquisa.html
app.controller("pesquisaRhController", function ($scope, $http, messageService) {

    var progressBar = angular.element("#progressBar");
    if (progressBar) {
        progressBar.progressBarTimer({ autoStart: true, height: 20,  label: { show: true, type: 'seconds' } });
    }



    

});
