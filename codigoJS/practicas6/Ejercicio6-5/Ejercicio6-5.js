let boton = document.createElement("button");
let bloque = document.getElementsByTagName("div")[0];
let parrafo = document.getElementsByTagName("p")[0];
boton.innerHTML = "PULSAR";
bloque.addEventListener("scroll", averiguarScroll);
function averiguarScroll() {
    if (bloque.scrollTop + bloque.clientHeight >= bloque.scrollHeight) {
        document.body.appendChild(boton);
        boton.addEventListener("click", borrar);
    }  
}

function borrar() {
    document.body.removeChild(bloque);
}