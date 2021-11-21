$(document).ready(function(){
    $("#filtrar").click(function(){
        filtrar();
    });

    $("#borrarfiltros").click(function(){
        borrarfiltros();
    });
});

function filtrar(){
    const establecimiento=$("#establecimiento").val();
    const idioma=$("#idioma").val();

    if(establecimiento == 0 && idioma == 0){
        console.log()
    }else if(!establecimiento == 0 && idioma == 0){
        $("#cursos article").hide();
        $(`#cursos .${establecimiento}`).show();
    }else if(establecimiento == 0 && !idioma == 0){
        $("#cursos article").hide();
        $(`#cursos .${idioma}`).show();
    }else{
        $("#cursos article").hide();
        $(`#cursos .${establecimiento}.${idioma}`).show();
    }
}

function borrarfiltros(){
    $("#establecimiento").val(0);
    $("#idioma").val(0);
    $("#cursos article").show();
}
