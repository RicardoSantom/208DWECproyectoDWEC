let numero = document.getElementsByTagName("span")[0];
document.body.addEventListener("keydown", modificarVelocidad);
let contador = 0;

function modificarVelocidad(ev) {
    if (ev.key == "ArrowUp") {
        if (contador < 120) {
            contador++;
        }
    }
    if (ev.key == "ArrowDown") {
        if (contador > 0) {
            contador--;
        }
    }
    numero.textContent=contador;
}