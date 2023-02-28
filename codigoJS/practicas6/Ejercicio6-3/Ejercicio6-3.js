let capa = document.getElementsByTagName("div")[0];
capa.addEventListener("mouseenter", coloreaVerde);
function coloreaVerde() {
    capa.style.backgroundColor = "green";
}
capa.addEventListener("mouseleave", quitaColor);
function quitaColor() {
    capa.style.backgroundColor = "transparent";
}
capa.addEventListener("mousedown", coloreaRojoAzul);
function coloreaRojoAzul(ev) {
    if (ev.button == 0) {
        capa.style.backgroundColor = "red";
    }
    if (ev.button == 2) {
        capa.style.backgroundColor = "blue";
    }
}
capa.addEventListener("mouseup", devuelveColor);
function devuelveColor() {
    capa.style.backgroundColor = coloreaVerde();
}
capa.addEventListener("contextmenu", quitarMenu);
function quitarMenu(ev) {
    ev.preventDefault();
}