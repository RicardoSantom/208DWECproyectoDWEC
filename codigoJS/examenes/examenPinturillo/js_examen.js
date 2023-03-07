// Comenzamos todo el proceso cuando la página se haya cargado completamente
window.addEventListener("load", comienzo);

// Función contenedora de todos los procedimientos
function comienzo() {
	//Selección de algunos de los elementos del DOM que necesitaremos
	var listadoTemas; //variable que podéis utilizar para almacenar el archivo json
	let botonDescargar = document.getElementById("descargar_temas");//boton para descargar los temas
	let botonQueDibujo = document.getElementById("que_dibujo");//botón ¿Qué dibujo?
	let selector = document.getElementById("temas");//Desplegable con los temas
	let dibAle = document.getElementById("dibujo_aleatorio");//Celda donde escribiremos el dibujo aleatorio
	let tamLienzo = document.getElementById("tam_lienzo");//Input donde ponemos el tamaño del lienzo
	let botonCrearLienzo = document.getElementById("crear_lienzo");//Botón Crear Lienzo
	let botonBorrar = document.getElementById("borrar");//Botón borrar
	let zonaDibujo = document.getElementById("dibujo");//Tabla en la que vamos a crear el lienzo
	let pincel = document.getElementById("pincel");//Celda donde pondremos el estado del pincel: ACTIVADO O DESACTIVADO
	let paleta = document.getElementById("paleta");//Fila que tiene la paleta de colores. Un color en cada
	var pincelActivo = false;//Variable booleana que guarda el estado del pincel 
	botonCrearLienzo.addEventListener("click", crearLienzo);
	activarPaleta();
	botonBorrar.addEventListener("click",borrarDibujo);

	var fila = document.createElement("tr");
	var celda = document.createElement("td");
	//funciones
	function crearLienzo(e) {
		e.preventDefault();
		
		zonaDibujo.setAttribute("class", "tablerodibujo")
		for (let index = 0; index < tamLienzo.value; index++) {
			 fila = document.createElement("tr");
			fila.setAttribute("class", "fila");
			for (let index2 = 0; index2 < tamLienzo.value; index2++) {
				celda = document.createElement("td");
				celda.setAttribute("class", "celda");
				fila.appendChild(celda);
			}
			zonaDibujo.appendChild(fila);
		}
		document.body.appendChild(zonaDibujo);
		botonCrearLienzo.removeEventListener("click", crearLienzo);
		zonaDibujo.addEventListener("click",activarPincel);
	}
	function activarPaleta() {
		let colores=paleta.children;
		for (const color of colores) {
			color.addEventListener("click",(e)=>{
				paleta.querySelector(".seleccionado").classList.remove("seleccionado");
				e.target.classList.add("seleccionado");
			});
		}
		
	}
	function activarPincel(e) {
		if(pincelActivo){
			for (const filas of zonaDibujo.children) {
				for (const celdas of filas.children) {
					celdas.removeEventListener("mouseover",pintar);
					
				}
			}
			pincelActivo=false;
			pincel.textContent="PINCEL DESACTIVADO";
		}else{
			for (const fila of zonaDibujo.children) {
				for (const celda of fila.children) {
					celda.addEventListener("mouseover",pintar);
				}
			}
			pincelActivo=true;
			pincel.textContent="PINCEL ACTIVADO";
		}
	}
	function pintar(e) {
		let color=document.querySelector(".seleccionado");
		if(pincelActivo){
			if(e.target.classList.length>1){
				e.target.classList.remove(e.target.classList[1]);
			}
			e.target.classList.add(color.classList[0]);
		}
	}
	function borrarDibujo(e) {
		e.preventDefault();
		for (const fila of zonaDibujo.children) {
			for (const celda of fila.children) {
				celda.classList.add("color6");
			}
		}
	}
}

