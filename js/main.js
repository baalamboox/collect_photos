$(document).ready(() => {
  $('#mostrar_tabla').load('view/tabla-datos.php');
    $('#boton_limpiar').click(() => {
        $('#cantidad_fotos').val('');
        $('#seleccion').val('');
        $('input:radio[name=tamanio]:checked').prop('checked', false)
        $('#total').val('');
        $('#tabla_datos_marcador').hide();
    });

    $('#boton_aceptar').click(() => {
        validar_vacios();
        
    });

    function validar_vacios(){
      if( $('#cantidad_fotos').val() == '' ){
        Swal.fire(
          'Te falta llenar la cantidad de fotos',
          '',
          'error'
        )
      } else if ($('#seleccion').val() == ''){
        Swal.fire(
          'Te falta seleccionar el tipo de foto',
          '',
          'error'
        )
      } else if ($('input:radio[name=tamanio]:checked').val() == undefined ){
        Swal.fire(
          'Te falta seleccionar un tamaño',
          '',
          'error'
        )
      }else{
        calcular_precio();
      }
    }

    function calcular_precio(){
      let cantidad_fotos = parseInt($('#cantidad_fotos').val());
        let tipo_foto = $('#seleccion').val();
        let medidas = $('input:radio[name=tamanio]:checked').val();

        switch (medidas) {
            case '3x4':
                if (tipo_foto == 'color') {
                    $('#total').val('$'+5.50 * cantidad_fotos);
                    insertarDatos();
                } else {
                    $('#total').val('$'+4.00 * cantidad_fotos);
                    insertarDatos();
                }
                break;
            case '4x6':
                if(tipo_foto == 'color'){
                  $('#total').val('$'+6.20 * cantidad_fotos);
                  insertarDatos();
                } else {
                  $('#total').val('$'+5.20 * cantidad_fotos);
                  insertarDatos();
                }
                break;
            case '5x7':
                if (tipo_foto == 'color') {
                    $('#total').val('$'+7.50 * cantidad_fotos);
                    insertarDatos();
                } else {
                    $('#total').val('$'+6 * cantidad_fotos);
                    insertarDatos();
                }
                break;
            case '6x8':
                  if (tipo_foto == 'color') {
                    $('#total').val('$'+9 * cantidad_fotos);
                    insertarDatos();
                } else {
                    $('#total').val('$'+7.90 * cantidad_fotos);
                    insertarDatos();
                }
                break;
            default:
                Swal.fire(
                  'Ingresa todos los datos requeridos',
                  '',
                  'error'
                )
                break;
        }
    }

    function insertarDatos() {
      $.ajax({
        url : "control/insert_datos.php",
        data : { 
            precio: $('#total').val()
        },
        type : "post",
        success : (response) => {
          if (response == 1) {
            Swal.fire(
              'Cobro Realizado',
              '',
              'success'
            )
          }
          console.log(response);
        }
    });
    }

    $(document).ready(function() {
      $('#miTabla').DataTable({
        "language": {
            "sProcessing":    "Procesando...",
            "sLengthMenu":    "Mostrar _MENU_ registros",
            "sZeroRecords":   "No se encontraron resultados",
            "sEmptyTable":    "Ningún dato disponible en esta tabla",
            "sInfo":          "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
            "sInfoEmpty":     "Mostrando registros del 0 al 0 de un total de 0 registros",
            "sInfoFiltered":  "(filtrado de un total de _MAX_ registros)",
            "sInfoPostFix":   "",
            "sSearch":        "Buscar:",
            "sUrl":           "",
            "sInfoThousands":  ",",
            "sLoadingRecords": "Cargando...",
            "oPaginate": {
                "sFirst":    "Primero",
                "sLast":    "Último",
                "sNext":    "Siguiente",
                "sPrevious": "Anterior"
            },
            "oAria": {
                "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                "sSortDescending": ": Activar para ordenar la columna de manera descendente"
            }
        }
    });
  } );
});