let capa1 =document.getElementById("capa1");
let capa2 =document.getElementById("capa2");
capa1n=document.addEventListener("drag",opacar);
function opacar(ev) {
    capa1.style.opacity=0.5;
}
capa2.addEventListener("dragenter",colorear);
function colorear(ev) {
    capa2.style.backgroundColor="red";
}
capa1.addEventListener("dragend",oscurecer);
function oscurecer(ev) {
    capa1.style.opacity=1;
}
capa2.addEventListener("dragleave",abandonar);
function abandonar(ev) {
    capa2.style.backgroundColor="transparent";
}
capa2.addEventListener("dragover",(ev)=> {ev.preventDefault()});
capa2.addEventListener("drop",eliminarOrigen);
function eliminarOrigen(ev) {
    capa2.style.backgroundColor="yellow";
    capa2.textContent="¡Lo has logrado!";
    capa1.style.display="none";
    document.body.removeChild(capa1);
}