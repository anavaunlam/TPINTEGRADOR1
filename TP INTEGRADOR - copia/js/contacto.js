$(document).ready(function() {
    $("#form").submit(function() {
        return validar();
    });
    $("#nombre").submit(function() {
        validar();
    });
    $("#apellido").submit(function() {
        validar();
    });
    $("#email").submit(function() {
        validar("#email");
    });
    $("#tel").submit(function(){
        validar(`#tel`);
    });
    $("#consulta").submit(function(){
        validar();
    });
    $("#consulta").keyup(function(){
        contadorcaracteres();
    });
});

/*contador de caracteres en timepo real*/
function contadorcaracteres(){
    var caracteresactuales =  $("#consulta").val().length;
    var caractereslimites = 1000;

    $("#caracteresactuales").text(caracteresactuales+"/")
    $("#caracteresrestantes").text(caractereslimites - caracteresactuales) 
}

function validar(){
    var regexemail = /^[0-9a-zA-Z._.-]+\@[0-9a-zA-Z._.-]+\.[0-9a-zA-Z]+$/; 
    var regextel = /^[0-9]{4}\-[0-9]{4}$/;
    var mensajenombre ="<p>El campo nombre es obligatorio</p>";
    var mensajeapellido ="<p>El campo apellido es obligatorio</p>";
    var mensajeemail ="<p>El email ingresado no es valido</p>";
    var mensajetel ="<p>El numero de telefono no es correcto</p>";
    var mensajeconsulta ="<p>Su consulta supera el numero de caracteres permitidos</p>"
    var mensajeconsulta2 ="<p>Por favor ingrese su consulta</p>"
    var error =0;

    reset();/*borra los errores y mensajes de error*/

    /*valida que nombre no este vacio*/
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
    if(!$("#tel").val().match(regextel)){
        error++;
        $("#mensajetel").append(mensajetel)
        $("#tel").addClass('error');
        $("#tel").keyup(function(){
            validar(`#tel`);
        });
    }

    /*valida el texto ingresado*/
    if($("#consulta").val().length > 1000){
        error++
        $("#mensajeconsulta").append(mensajeconsulta)
        $("#consulta").addClass('error');
        $("#consulta").keyup(function(){
            validar();
        });
    }else if ($("#consulta").val().length == 0){
        error++
        $("#mensajeconsulta").append(mensajeconsulta2)
        $("#consulta").addClass('error');
        $("#consulta").keyup(function(){
            validar();
        });
    }

    /*Si hay errores mostrara los mensajes de estos, sino retornara envio exitoso*/
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
    $("#consulta").removeClass('error');
    $("#mensajenombre").empty(); 
    $("#mensajeapellido").empty(); 
    $("#mensajeemail").empty(); 
    $("#mensajetel").empty(); 
    $("#mensajeconsulta").empty(); 
}

function mostrarpopup(){
    if(validar() == true){
        $(".popup").css(display [block])
        $("#cerrar").click(function(){
        $(".popup").fadeOut();
        });
}}