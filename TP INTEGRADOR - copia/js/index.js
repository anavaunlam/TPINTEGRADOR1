let buenosaires = ["Selecciona un instituto","Universidad Nacional de la Matanza"];
let cordoba = ["Selecciona un instituto","Universidad Nacional de Córdoba"];
let entrerios = ["Selecciona un instituto","Universidad Nacional de Entre Ríos"];
let santafe = ["Selecciona un instituto","Universidad Católica de Santa Fe"];

let institutosbuenosaires=[
    {
        "establecimiento" : 1,
        "instituto": "Universidad Nacional de la Matanza",
        "direccion": "Florencio Varela 3400",
        "Localidad": "San justo",
        "Provincia": "Buenos Aires",
        "Email": "matanzaresponde147@lamatanza.gov.ar"
    }
];
let institutoscordoba=[
    {
        "establecimiento" : 1,
        "instituto": "Universidad Nacional de Córdoba",
        "direccion": "Av. Haya de la Torre",
        "Localidad": "Córdoba Capital",
        "Provincia": "Córdoba",
        "Email": "cordobaresponde147@cordoba.gov.ar"
    }
];
let institutosentrerios=[
    {
        "establecimiento" : 1,
        "instituto": "Universidad Nacional de Entre Ríos",
        "direccion": "Eva Duarte de Perón 24",
        "Localidad": "Concepción del Uruguay",
        "Provincia": "Entre Ríos",
        "Email": "entreriosresponde147@entrerios.gov.ar"
    }
];
let institutossantafe=[
    {
        "establecimiento" : 1,
        "instituto": "Universidad Católica de Santa Fe",
        "direccion": "Cngo. Echagüe 71511",
        "Localidad": "Ciudad de Santa Fe",
        "Provincia": "Santa Fe",
        "Email": "santaferesponde147@santafe.gov.ar"
    }
];

let precios=[
    {
        "idioma": 1,
        "precio": "$1000"
    },
    {
        "idioma": 2,
        "precio": "$1500"
    },    
    {
        "idioma": 3,
        "precio": "$2000"
    },
    {
        "idioma": 4,
        "precio": "$2500"
    },
    {
        "idioma": 5,
        "precio": "$3000"
    },
    {
        "idioma": 6,
        "precio": "$3500"
    },
    {
        "idioma": 7,
        "precio": "$4000"
    },
    {
        "idioma": 8,
        "precio": "$4500"
    },
]

$(document).ready(function(){
    $("#slider").slick({
        autoplay: true,
        infinite: true
    });
    $("#form").submit(function(){
        return validar();
    });
    $("#provincia").change(function(){
        combodesplegable($(this).val());
    });
    $("#instituto").change(function(){
        mostrarinfo($(this).val());
    });
    $("#idioma").change(function(){
        mostrarprecio($(this).val());
    });
    $("#inscribete").click(function(){
        localStorage();
    });
});

/*muestra los institutos de cada provincia*/
function combodesplegable(valor){
    $("#instituto").empty();
    if(valor==1){
        //lleno el combo con los array
        for(i in buenosaires){
            $("#instituto").append(`<option value="${i}">${buenosaires[i]}</option>`)
        }
    }else if(valor==2){
        for(i in cordoba){
            $("#instituto").append(`<option value="${i}">${cordoba[i]}</option>`)
        }
    }else if(valor==3){
        for (i in entrerios){
            $("#instituto").append(`<option value="${i}">${entrerios[i]}</option>`)
        }
    }else if(valor==4){
        for(i in santafe){
        $("#instituto").append(`<option value="${i}">${santafe[i]}</option>`)
        }
    }
}

/*muestra la informacion del instituto elegido de la provincia elegida, a traves de un array de objetos*/
function mostrarinfo(instituto){
    const valor=$("#provincia").val();

    if(valor==1){
        const institutoprovincia = institutosbuenosaires;
        filtrarinstitutos(institutoprovincia, instituto);
    }else if(valor==2){
        const institutoprovincia = institutoscordoba;
        filtrarinstitutos(institutoprovincia, instituto);
    }else if(valor==3){
        const institutoprovincia = institutosentrerios;
        filtrarinstitutos(institutoprovincia, instituto);
    }else if(valor==4){
        const institutoprovincia = institutossantafe;
        filtrarinstitutos(institutoprovincia, instituto);
    }
}

function filtrarinstitutos(institutoprovincia, instituto){
    let filtrado=institutoprovincia.filter(institutoprovincia=>institutoprovincia.establecimiento==instituto);
    $("#informacion").empty();
    filtrado.forEach(institutoprovincia => {
        $("#informacion").append(`
            <div>
                <h5>Establecimiento:</h5>
                <p>${institutoprovincia.instituto}</p>
                <h5>Dirección:</h5>
                <p>${institutoprovincia.direccion}</p>
                <h5>Localidad:</h5>
                <p>${institutoprovincia.Localidad}</p>
                <h5>Provincia:</h5>
                <p>${institutoprovincia.Provincia}</p>
                <h5>Email:</h5>
                <p>${institutoprovincia.Email}</p>
            </div>
        `);
    });
}

function mostrarprecio(valor){
    let filtrado=precios.filter(precios=>precios.idioma==valor);
    $("#precio").empty();
    filtrado.forEach(precios=> {
        $("#precio").append(`<p>${precios.precio}</p>`);
    });
}
function validar(){
    if($("#provincia, #instituto, #idioma, #hora").is(`:selected`)){
        return true;
    }else{
        return false;
    }
}
function localStorage(){
    let provincia=$("#provincia").val();
    if($("#provincia, #instituto, #idioma, #hora").is(`:selected`)){
    localStorage.setItem(`"establecimiento", ${provincia}`);
    localStorage.setItem("precio",``);
    localStorage.setItem("curso",``);
    localStorage.setItem("horario",``);
    }
}
