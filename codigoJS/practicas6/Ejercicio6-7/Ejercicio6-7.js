
        let desplegable=document.getElementById("seleccionValores");
        desplegable.addEventListener("change",cambiarFoto);
         function cambiarFoto(){
            //let opcionSeleccionada=desplegable.options[desplegable.selectedIndex].value;
            let opcionSeleccionada=desplegable.value;
            let imagen=document.getElementById("imagen");
            switch(opcionSeleccionada){
                case "Distribucion": imagen.setAttribute("src", "../img/factoria.png");
                    break;
                case "Oficina": imagen.setAttribute("src", "https://picsum.photos/id/151/200/300");
                    break;
                case "Produccion": imagen.setAttribute("src", "https://picsum.photos/id/152/200/300");
            }
        };
        let botonDescripcion=document.getElementById("botonDescripcion");
        botonDescripcion.addEventListener("click",mostrarBoton);
         function mostrarBoton(){
            let texto=document.getElementById("texto");
            texto.style.display="block";
        };
        /*let numeroSerie=document.getElementById("numeroSerie");
        numeroSerie.addEventListener("click",cambiarValores);*/

        let botonEnviar=document.getElementById("enviar");
        botonEnviar.addEventListener("click",cambiarValores);

        function cambiarValores(ev){
            ev.preventDefault();
            let input=numeroSerie.value;
            var regEx=/^[0-9]{3}[A-Z]{4}[12A]$/;
            let inputValido = regEx.test(input)
            let error=document.getElementById("error");
            if(!inputValido){                
                error.style.display="block";
            }
            else{
                error.style.display="none";
            }
        }

        numeroSerie.addEventListener("focus",ocultarError);
        function ocultarError(){
            error.style.display="none";
        }