let bloque=document.getElementById("cartel");
document.body.addEventListener("mousemove",moverBloque);
function moverBloque(ev) {
    bloque.style.top=ev.clientY+"px";
    bloque.style.left=ev.clientX+"px";
}