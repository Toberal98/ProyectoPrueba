
function evento1(){
    console.log('se activo el evento 1');
}


function evento2(){
    console.log('se activo el evento 2');
}

function evento3(){
    console.log('se activo el evento 3  focus');
}

function evento4(){
    console.log('se activo el evento 4  moseout');
}

var objeto = document.getElementById("txtNombre");
document.addEventListener("keypress",evento1);