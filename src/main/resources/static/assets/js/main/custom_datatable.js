$(document).ready(function(){
    $('.datatable-reorder').DataTable({
    dom: '<"datatable-header"fl><"datatable-scroll"t><"datatable-footer"ip>',
    colReorder: {
        realtime: true
    },
        language: {
            "url": "https://cdn.datatables.net/plug-ins/1.10.19/i18n/Portuguese-Brasil.json"
     }
                    
    });
   
});





