$(document).ready(function() {
    $("#form").submit(function() {
        return validar();
    });
    $("#nombre, #apellido, #tel, #provincia, #ciudad").submit(function() {
        validar();
    });
    $("#email").submit(function() {
        validar("#email");
    });
});

function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; 
    var mensajenombre ="<p>El campo nombre es obligatorio</p>";
    var mensajeapellido ="<p>El campo apellido es obligatorio</p>";
    var mensajeemail ="<p>El email ingresado no es valido</p>";
    var mensajetel ="<p>El numero de telefono es obligatorio</p>";
    var mensajeprovincia ="<p>El campo provincia es obligatorio</p>";
    var mensajeciudad = "<p>El campo ciudad es obligatorio</p>";
    var error =0;

    reset();

    if ($("#nombre").val() == ""){ 
        error++;
        $("#mensajenombre").append(mensajenombre)
        $("#nombre").addClass('error');
        $("#nombre").keyup(function() { /*valida en tiempo real luego que se muestra el error*/
            validar();
        });
    }

    /*valida que apellido no este vacio*/
    if($("#apellido").val() == ""){
        error++;
        $("#mensajeapellido").append(mensajeapellido)
        $("#apellido").addClass('error');
        $("#apellido").keyup(function() {
            validar();
        });
    }

    /*valida el email*/
    if(!$("#email").val().match(regexemail)){
        error++;
        $("#mensajeemail").append(mensajeemail)
        $("#email").addClass('error');
        $("#email").keyup(function() {
            validar("#email");
        });
    }

    /*valida el telefono*/
    if($("#tel").val() == ""){
        error++;
        $("#mensajetel").append(mensajetel)
        $("#tel").addClass('error');
        $("#tel").keyup(function() {
            validar();
        });
    }

    if($("#provincia").val() == ""){
        error++;
        $("#mensajeprovincia").append(mensajeprovincia)
        $("#provincia").addClass('error');
        $("#provincia").keyup(function() {
            validar();
        });
    }

    if($("#ciudad").val() == ""){
        error++;
        $("#mensajeciudad").append(mensajeciudad)
        $("#ciudad").addClass('error');
        $("#ciudad").keyup(function() {
            validar();
        });
    }

    if (error>0){
        return false;
    }else{
        return true;
    }
}

function reset(){ 
    $("#nombre").removeClass('error');
    $("#apellido").removeClass('error');
    $("#email").removeClass('error');
    $("#tel").removeClass('error');
    $("#provincia").removeClass('error');
    $("#ciudad").removeClass('error');
    $("#mensajenombre").empty(); 
    $("#mensajeapellido").empty(); 
    $("#mensajeemail").empty(); 
    $("#mensajetel").empty(); 
    $("#mensajeprovincia").empty(); 
    $("#mensajeciudad").empty(); 
}
