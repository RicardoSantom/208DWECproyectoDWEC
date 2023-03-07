let lista=document.getElementsByTagName("ul")[0];
let botonEnviar = document.getElementById("enviar");
botonEnviar.addEventListener("click", anyadirTarea);
function anyadirTarea(ev) {    
    ev.preventDefault();
    let inputEnviar = document.querySelector("input");
    let textoInput = inputEnviar.value;
    let nuevaEntrada = document.createElement("li");
    nuevaEntrada.innerHTML=textoInput;
    lista.appendChild(nuevaEntrada);
    let nuevoA = document.createElement("a");
    nuevoA.innerHTML = "quitar";
    nuevoA.addEventListener("click",quitarLi);
    nuevaEntrada.appendChild(nuevoA);
    nuevaEntrada.addEventListener("click",ponerPrimero);
}

function quitarLi(ev) {
    ev.stopPropagation();
   lista.removeChild(ev.target.parentNode);
}

function ponerPrimero(ev) {
    lista.insertBefore(ev.target,lista.firstChild);
}