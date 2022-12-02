let datos, acumuladorCaracteres = "", acumuladorNumeros = 0;
let salir = false, siNumeros = false, siCaracteres = false;
do {
    datos = prompt("Introduzca datos aleatorios (números y carácteres son bienvenidos)");
    if (datos == null || datos == undefined) {
        console.log(datos);
        salir = true;
    } else {
        salir = false;
        if (isNaN(datos)) {
            acumuladorCaracteres += datos+",";
            siCaracteres = true;
        } else {
            acumuladorNumeros += parseInt(datos);
            siNumeros = true;
        }
    }
} while (!salir);

if (siCaracteres == true && siNumeros == true) {
    document.write("Los caracteres introducidos son: \"" + acumuladorCaracteres + "\" y los números introducidos suman = " + acumuladorNumeros);
} else {
    if (siCaracteres == false && siNumeros == true) {
        document.write("No ha introducido caracteres pero si números y estos últimos suman = " + acumuladorNumeros);
    }
    if (siCaracteres == true && siNumeros == false) {
        document.write("No ha introducido números pero si caracteres y estos últimos conforman esta cadena = \"" + acumuladorCaracteres + "\"");
    }
}
if (siCaracteres == false && siNumeros == false) {
    document.write("No ha introducido ni números ni caracteres.");
}





