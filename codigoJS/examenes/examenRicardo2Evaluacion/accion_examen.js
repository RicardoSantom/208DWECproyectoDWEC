window.addEventListener("load", examen);
function examen() {
    provincias = new Map();
    provincias.set("GA", ["La Coruña", "Lugo", "Orense", "Pontevedra"]);
    provincias.set("CL", ["Ávila", "Burgos", "León", "Palencia", "Salamanca", "Segovia", "Soria", "Valladolid", "Zamora"]);
    provincias.set("EX", ["Badajoz", "Cáceres"]);
    provincias.set("PV", ["Álava", "Vizcaya", "Guipúzcoa"]);

    nombre = document.getElementById("nombre");
    apellidos = document.getElementById("apellidos");
    edad = document.getElementById("edad");
    comunidades = document.getElementById("ccaa");
    provincia = document.getElementById("provincia");
    destinoArrastrable = document.querySelector(".resultado");
    num1 = document.getElementById("num1");
    num2 = document.getElementById("num2");
    botonEnviar = document.getElementById("enviar");
    captcha = document.getElementById("captcha");
    formulario = document.getElementById("formulario");
    botonWeb = document.getElementById("btnweb");
    botonDOM = document.getElementById("btndom");
    botonInformacion = document.getElementById("btninfo");
    cuadroDOM = document.getElementById("DOM");
    cuadroInformacion = document.getElementById("informacion");
    pie = document.getElementById("pie");
    let nombreOK = false;
    let apellidoOK = false;
    let edadOK = false;

    validarNombre = /^\w{3}/;
    validarApellidos = /^\w{2,}\s\w{2,}/;
    validarEdad = /^(10\d|110)|^(\d{1,2})$/;
    /*************EJERCICIO 1**************/
    nombre.addEventListener("keyup", funcionValidarNombre);
    function funcionValidarNombre(e) {
        if (validarNombre.test(e.target.value)) {
            nombreOK = true;
            nombre.classList.add("correcto");
        } else {
            nombreOK = false;
            nombre.classList.remove("correcto");
        }
    }

    apellidos.addEventListener("keyup", funcionValidarApellidos);
    function funcionValidarApellidos(e) {
        if (validarApellidos.test(e.target.value)) {
            apellidoOK = true;
            apellidos.classList.add("correcto");
        } else {
            apellidoOK = false;
            apellidos.classList.remove("correcto");
        }
    }

    edad.addEventListener("keyup", funcionValidarEdad);
    function funcionValidarEdad(e) {
        if (validarEdad.test(e.target.value)) {
            edadOK = true;
            edad.classList.add("correcto");
        } else {
            edadOK = false;
            edad.classList.remove("correcto");
        }
    }

    nombre.addEventListener("blur", convertirAMayusculas);
    apellidos.addEventListener("blur", convertirAMayusculas);
    function convertirAMayusculas(e) {
        if (nombreOK) {
            nombre.style.textTransform = "uppercase";
        }

        if (apellidoOK) {
            apellidos.style.textTransform = "uppercase";
        }
    }
    /**********************EJERCICIO 2*************************/
    comunidades.addEventListener("focusout", listarProvincias);
    function listarProvincias(ev) {
        provincia.value = provincia.children[0];
        let comunidades = provincias.get(ev.target.value);
        let listadoProvincias = document.getElementsByClassName("provincia");
        if (listadoProvincias.length > 1) {
            do {
                provincia.removeChild(listadoProvincias[0]);
            } while (listadoProvincias.length > 0);
        }

        /*for (let index = 0; index < comunidades.length; index++) {
            opcion = document.createElement("option");
            opcion.classList.add("provincia");
            opcion.textContent = comunidades[index];
            provincia.appendChild(opcion);
        }*/

        for (const key in comunidades) {
            opcion = document.createElement("option");
            opcion.classList.add("provincia");
            opcion.textContent = comunidades[key];
            provincia.appendChild(opcion);
        }

    }
    /********************EJERCICIO 3*************************/
    var enviarDatosOK = false;
    var enviarLocalizacionOK = false;
    botonEnviar.addEventListener("click", comprobarCampos);
    function comprobarCampos(ev) {
        ev.preventDefault();
        if (nombreOK == true && apellidoOK == true && edadOK == true) {
            enviarDatosOK = true;
        } else {
            enviarDatosOK = false;
            alert("Ha introducido datos incorrectos");
        }

        if (comunidades.value == 0 || provincia.value == 0) {
            enviarLocalizacionOK = false;
            alert("Falta elegir comunidad o provincia");
        } else {
            enviarLocalizacionOK = true;
        }

        if ((enviarDatosOK == true) && (enviarLocalizacionOK == true)) {
            captcha.style.display = "block";
        } else {
            captcha.style.display = "none";
        }
    }

    let botonLimpiar = document.getElementById("button");
    botonLimpiar.addEventListener("click", quitarCaptcha);
    function quitarCaptcha() {
        nombre.classList.remove("correcto");
        apellidos.classList.remove("correcto");
        edad.classList.remove("correcto");
        comunidades.value = 0;
        provincia.value = 0;
        captcha.style.display = "none";
    }

    /*******************EJERCICIO 4*************************/

    let sumando1 = parseInt(Math.random() * 9);
    let sumando2 = parseInt(Math.random() * 9);
    let resultado = sumando1 + sumando2;
    num1.textContent = sumando1;
    num2.textContent = sumando2;
    let aleatorio1;
    let aleatorio2;

    do {
        aleatorio1 = parseInt(Math.random() * 19);
    } while (aleatorio1 == resultado)

    do {
        aleatorio2 = parseInt(Math.random() * 19);
    } while (aleatorio2 == resultado || aleatorio2 == aleatorio1)



    let arrayAleatorios = [resultado, aleatorio1, aleatorio2];
    //Función sacada de la w3cSchools para ordenar array de manera aleatoria.
    arrayAleatorios.sort(function () { return 0.5 - Math.random() });
    let sol1 = document.getElementById("sol1");
    let sol2 = document.getElementById("sol2");
    let sol3 = document.getElementById("sol3");
    sol1.textContent = arrayAleatorios[0];
    sol1.setAttribute("draggable", "true");
    sol2.textContent = arrayAleatorios[1];
    sol2.setAttribute("draggable", "true");
    sol3.textContent = arrayAleatorios[2];
    sol3.setAttribute("draggable", "true");

    /**transparentar */
    sol1.addEventListener("dragstart", transparentar);
    sol2.addEventListener("dragstart", transparentar);
    sol3.addEventListener("dragstart", transparentar);
    function transparentar(ev) {
        ev.target.style.opacity = 0.5;
        ev.target.classList.add("arrastrado");
    }
    /**oscurecer */
    sol1.addEventListener("dragend", oscurecer);
    sol2.addEventListener("dragend", oscurecer);
    sol3.addEventListener("dragend", oscurecer);
    function oscurecer(ev) {
        ev.target.style.opacity = 1;
        ev.target.classList.remove("arrastrado");
    }
    /**colorear destino */
    let destino = document.getElementsByClassName("resultado")[0];
    destino.addEventListener("dragenter", colorear);
    function colorear(ev) {
        ev.target.style.backgroundColor = "yellow";
    }
    /**transparentar origen */
    destino.addEventListener("dragleave", abandonar);
    function abandonar(ev) {
        ev.target.style.backgroundColor = "transparent";
    }
    /**comprobar cuentas */
    destinoArrastrable.addEventListener("dragover", regresar);
    function regresar(ev) {
        ev.preventDefault();
    }
    destinoArrastrable.addEventListener("drop", comprobarCuentas);
    function comprobarCuentas(ev) {
        /**identificar arrastrado */
        let elementoArrastrado = document.getElementsByClassName("arrastrado")[0];
        let valorArrastrado = elementoArrastrado.textContent;
        if (parseInt(valorArrastrado) == resultado) {
            ev.target.style.backgroundColor = "green";
            ev.target.textContent = "OK";

            /*********************intervalos************************/
            var pCaptcha = captcha.getElementsByTagName("p")[0];
            var mensajeHappy = document.createElement("p");
            mensajeHappy.textContent = "ENHORABUENA, NO ERES UN ROBOT";
            //Se que no la utilizo, pero me hace ilusión guardarlo en una variable
            var mensajeEnhorabuena = setTimeout(() => {
                captcha.removeChild(pCaptcha);
                captcha.insertAdjacentElement("afterBegin", mensajeHappy);
            }, 2000);
            //Igual que en el anterior comentario.
            var enviarForm = setTimeout(() => {
                formulario.submit();
            }, 4000);

        } else {
            ev.target.style.backgroundColor = "red";
            ev.target.textContent = "NO";
        }
    }
    /********************EJERCICIO 5************************/
    /*FOOTER */
    var nuevaVentana;
    botonWeb.addEventListener("click", crearVentana);
    function crearVentana(ev) {
        nuevaVentana = window.open("http://daw208.ieslossauces.es/",
            "_blank", "width=1000,height=500");
    }

    let botonCerrar = document.createElement("button");
    botonWeb.addEventListener("click", crearBoton);
    function crearBoton(ev) {
        botonCerrar.setAttribute("class", "cerrar");
        botonCerrar.textContent = "Cerrar";
        pie.insertAdjacentElement("beforeEnd", botonCerrar);
    }

    botonCerrar.addEventListener("click", borrarBotonCerrarVentana);
    function borrarBotonCerrarVentana(ev) {
        nuevaVentana.close();
        pie.removeChild(botonCerrar);
    }

    let botonCerrarDom = document.createElement("button");
    botonDOM.addEventListener("click", crearBotonCerrarDom);
    function crearBotonCerrarDom(ev) {
        botonCerrarDom.setAttribute("class", "cerrar");
        botonCerrarDom.textContent = "Cerrar DOM";
        pie.insertAdjacentElement("beforeEnd", botonCerrarDom);
    }

    botonCerrarDom.addEventListener("click", borrarBotonCerrarDom);
    function borrarBotonCerrarDom(ev) {
        cuadroDOM.textContent = "";
        cuadroDOM.style.display = "none";
        pie.removeChild(botonCerrarDom);
    }

    botonDOM.addEventListener("click", mostrarDivDom);
    function mostrarDivDom(ev) {
        cuadroDOM.textContent = document.head.innerHTML + document.body.innerHTML;
        cuadroDOM.style.display = "block";
    }

    botonInformacion.addEventListener("click", mostrarDivInformacion);
    function mostrarDivInformacion(ev) {
        cuadroInformacion.style.display = "block";
        cuadroInformacion.innerHTML = "<h2>INFORMACIÓN DE MI PÁGINA</h2>";
        /***********************DOCUMENT******************/
        /*parrafos*/
        let numeroParrafos = document.querySelectorAll("p");
        let infoNumeroParrafos = document.createElement("p");
        infoNumeroParrafos.innerHTML = `<strong>Número de parrafos:</strong> ${numeroParrafos.length}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", infoNumeroParrafos);
        /*botones*/
        let numeroBotones = document.querySelectorAll("button");
        let infoNumeroBotones = document.createElement("p");
        infoNumeroBotones.innerHTML = `<strong>Número de botones:</strong> ${numeroBotones.length}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", infoNumeroBotones);
        /*div*/
        let numeroDivs = document.querySelectorAll("div");
        let infoNumeroDivs = document.createElement("p");
        infoNumeroDivs.innerHTML = `<strong>Número de divs:</strong> ${numeroDivs.length}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", infoNumeroDivs);
        /************************WINDOW********************/
        /*Ancho*/
        let anchoVentana = document.createElement("p");
        anchoVentana.innerHTML = `<strong>Ancho ventana:</strong> ${window.innerWidth}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", anchoVentana);
        /*Alto*/
        let altoVentana = document.createElement("p");
        altoVentana.innerHTML = `<strong>Alto ventana:</strong> ${window.innerHeight}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", altoVentana);
        /*Numero páginas*/
        let numeroVentanas = document.createElement("p");
        numeroVentanas.innerHTML = `<strong>Numero de páginas en el historial:</strong> ${window.history.length}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", numeroVentanas);
        /**********************NAVEGADOR*******************/
        /*versión */
        let infoVersionNavegador = document.createElement("p");
        infoVersionNavegador.innerHTML = `<strong>Versión del navegador:</strong> ${navigator.appVersion}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", infoVersionNavegador);
        /*MOTOR*/
        let infoMotor = document.createElement("p");
        infoMotor.innerHTML = `<strong>Motor del navegador:</strong> ${navigator.product}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", infoMotor);
        /*lenguaje*/
        let infoLenguaje = document.createElement("p");
        infoLenguaje.innerHTML = `<strong>Lenguaje del navegador:</strong> ${navigator.language}`;
        cuadroInformacion.insertAdjacentElement("beforeEnd", infoLenguaje);

    }

    let botonCerrarInformacion = document.createElement("button");
    botonInformacion.addEventListener("click", crearBotonCerrarInformacion);
    function crearBotonCerrarInformacion(ev) {
        botonCerrarInformacion.setAttribute("class", "cerrar");
        botonCerrarInformacion.textContent = "Cerrar Informacion";
        pie.insertAdjacentElement("beforeEnd", botonCerrarInformacion);
    }

    botonCerrarInformacion.addEventListener("click", borrarBotonCerrarInformacion);
    function borrarBotonCerrarInformacion(ev) {
        cuadroInformaciontextContent = "";
        cuadroInformacion.style.display = "none";
        pie.removeChild(botonCerrarInformacion);
    }
}