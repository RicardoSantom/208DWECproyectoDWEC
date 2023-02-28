let bloqueOsi=document.getElementById("modeloOSI");
let checkBoxOsi=document.getElementById("cOsi");
checkBoxOsi.addEventListener("click",marcarDesmarcar);
function marcarDesmarcar(ev) {
    if (checkBoxOsi.checked==true) {
        bloqueOsi.style.display="block";
    } else {
        bloqueOsi.style.display="none";
    }
}

let bloqueTcpip=document.getElementById("modeloTCPIP");
let checkBoxTcpip=document.getElementById("cTcpip");
checkBoxTcpip.addEventListener("click",marcarDesmarcarTcpip);
function marcarDesmarcarTcpip(ev) {
    if (checkBoxTcpip.checked==true) {
        bloqueTcpip.style.display="block";
    } else {
        bloqueTcpip.style.display="none";
    }
}

let botonOcultarAmbas=document.getElementById("ocultar");
botonOcultarAmbas.addEventListener("click",ocultarAmbas);
function ocultarAmbas(ev) {
    checkBoxOsi.checked=false;
    checkBoxTcpip.checked=false;
    bloqueOsi.style.display="none";
    bloqueTcpip.style.display="none";
}

let capaNegra=document.getElementById("capaTodo");
let botonOcultarTodo=document.getElementById("todo");
botonOcultarTodo.addEventListener("click",ocultarTodo);
function ocultarTodo(ev) {
    capaNegra.style.top=0;
    capaNegra.style.transition="ease-in";
    capaNegra.style.transition="0.5s ease-in"
}

capaNegra.addEventListener("click",levantarVelo);
function levantarVelo(ev) {
    capaNegra.style.top="-100%";
    capaNegra.style.transition="0.5s ease-out"
}