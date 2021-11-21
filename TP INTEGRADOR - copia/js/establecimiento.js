$(document).ready(function(){
    $("#provincia").change(function(){
        filtrar();
    });

    $("#borrarfiltro").click(function(){
        borrarfiltro();
    });
});

function filtrar(){
    const provincia=$("#provincia").val();

    if(provincia == 0){
        console.log()
    }else{
        $(".contenedor").hide();
        $(`.${provincia}`).show();
    }
}

function borrarfiltro(){
    $("#provincia").val(0);
    $(".contenedor").show();
}