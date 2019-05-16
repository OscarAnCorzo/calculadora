$(document).ready(function(){
    $('.boton1').click(function(){
        var id = '#' + $(this).attr("id");
        if(id != '#igual'){
            var caracter = $(id).val();
            var campoValor = $('.campo').val() + caracter;
            $('.campo').val(campoValor);
        }
    });

    function operacion(cadena){
        console.log(cadena);
        var numeros = cadena.split(/[\+,\-,\*,\/]/);
        var operadores = cadena.split(/[0-9.]/);
        
        for (var i=0; i < operadores.length; i++) {
            if(operadores[i] != ''){
                var operador = operadores[i];
            }
        }
        var primero = parseFloat(numeros[0]);
        var segundo = parseFloat(numeros[1]);
        var params={
            numero1: primero,
            numero2: segundo,
            signo: operador
        }
        $.ajax({
            url: "../operador.jsp",
            type: "get",
            data: params,
            success:function(data){
                var data = $.parseJSON(data);
                $('.campo').val(data.resultado);
            }
        });
    }

    $('#igual').click(function(){
        expresion = /[0-9.]+[\+,\-,\*,\/]+[0-9.]/;
        var cadena = $('.campo').val();
        if(expresion.test(cadena)){
            operacion(cadena);
            $('.campo2').val(cadena);
        }
    });
    
    $('#ac').click(function(){
        $('.campo').val('');
    });

    $('#borrar').click(function(){
        var cadena = $('.campo').val();
        var cadena2 = cadena.slice(0,-1);
        $('.campo').val(cadena2);
    });
});