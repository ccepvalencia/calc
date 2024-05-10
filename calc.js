function calcularNomina() {
	//Si tienes constantes como estos números es mejor definirlas antes para poder reutilizarlas y si cambian cambiarlas solo en un sitio
	//Te he hecho unas pocas de ejemplo el resto dale tu. 
	//Lo mismo con el 0 y toFixed 2 yo pondría una constante por si luego quiero rendondear a otro valor o quiero que el valor por defecto sea distinto
	const precioB3 = 73.19;
	const precioB4 = 82.56;
	const precioC5 = 92.32;
	const precioC6 = 106.57;
	const precioCHorasDiurnas = 27.60;
	const precioCHorasNocturnas = 38.64;
	
    var b3 = parseInt(document.getElementById("b3").value) || 0;
    var b4 = parseInt(document.getElementById("b4").value) || 0;
    var c5 = parseInt(document.getElementById("c5").value) || 0;
    var c6 = parseInt(document.getElementById("c6").value) || 0;

    var b3HorasDiurnas = parseInt(document.getElementById("b3HorasDiurnas").value) || 0;
    var b3HorasNocturnas = parseInt(document.getElementById("b3HorasNocturnas").value) || 0;
    var b4HorasDiurnas = parseInt(document.getElementById("b4HorasDiurnas").value) || 0;
    var b4HorasNocturnas = parseInt(document.getElementById("b4HorasNocturnas").value) || 0;
    var c5HorasDiurnas = parseInt(document.getElementById("c5HorasDiurnas").value) || 0;
    var c5HorasNocturnas = parseInt(document.getElementById("c5HorasNocturnas").value) || 0;
    var c6HorasDiurnas = parseInt(document.getElementById("c6HorasDiurnas").value) || 0;
    var c6HorasNocturnas = parseInt(document.getElementById("c6HorasNocturnas").value) || 0;

    var b3Nocturnos = parseInt(document.getElementById("b3Nocturnos").value) || 0;
    var b4Nocturnos = parseInt(document.getElementById("b4Nocturnos").value) || 0;
    var c5Nocturnos = parseInt(document.getElementById("c5Nocturnos").value) || 0;
    var c6Nocturnos = parseInt(document.getElementById("c6Nocturnos").value) || 0;

    var sabados = parseInt(document.getElementById("sabados").value) || 0;
    var domingos = parseInt(document.getElementById("domingos").value) || 0;

    var cuartoTurno = document.getElementById("cuartoTurno").value;

    // Calcular sueldo base
    var sueldoB3 = b3 * precioB3;
    var sueldoB4 = b4 * precioB4;
    var sueldoC5 = c5 * precioC5;
    var sueldoC6 = c6 * precioC6;

    // Calcular horas extras
    var horasExtrasB3Diurnas = b3HorasDiurnas * 25.07;
    var horasExtrasB3Nocturnas = b3HorasNocturnas * 35.10;
    var horasExtrasB4Diurnas = b4HorasDiurnas * 26.39;
    var horasExtrasB4Nocturnas = b4HorasNocturnas * 36.94;
    var horasExtrasC5Diurnas = c5HorasDiurnas * precioCHorasDiurnas;
    var horasExtrasC5Nocturnas = c5HorasNocturnas * precioCHorasNocturnas;
    var horasExtrasC6Diurnas = c6HorasDiurnas * precioCHorasDiurnas;
    var horasExtrasC6Nocturnas = c6HorasNocturnas * precioCHorasNocturnas;

    // Calcular días nocturnos
    var totalNocturnosB3 = b3Nocturnos * 29.27;
    var totalNocturnosB4 = b4Nocturnos * 33.02;
    var totalNocturnosC5 = c5Nocturnos * 36.93;
    var totalNocturnosC6 = c6Nocturnos * 42.62;

    // Calcular días trabajados en fin de semana
    var totalSabados = sabados * 228.30;
    var totalDomingos = domingos * 260.85;


var precioSabado8 = 159.81;
var precioDomingo8 = 182.60;

// Obtener valores de Sábado8 y Domingo8
var sabado8 = parseInt(document.getElementById("sabado8").value) || 0;
var domingo8 = parseInt(document.getElementById("domingo8").value) || 0;

// Calcular el monto de Sábado8 y Domingo8
var montoSabado8 = sabado8 * precioSabado8;
var montoDomingo8 = domingo8 * precioDomingo8;



	//calcular plus asistencia
	var plusAsistencia = document.getElementById("plusAsistencia").value;
	var montoPlusAsistencia = 0;

	if (plusAsistencia === "si") {
    montoPlusAsistencia = 44.01;
}

    // Calcular monto adicional por 4º turno
    var montoCuartoTurno = 0;
    if (cuartoTurno === "si") {
        montoCuartoTurno = 108.70;
    }
var precioArrancadorB3 = 20.41;
var precioArrancadorC5 = 21.87;
var precioArrancadorC6 = 22.84;

// Obtener valores de los arrancadores
var arrancadoresB3 = parseInt(document.getElementById("arrancadoresB3").value) || 0;
var arrancadoresC5 = parseInt(document.getElementById("arrancadoresC5").value) || 0;
var arrancadoresC6 = parseInt(document.getElementById("arrancadoresC6").value) || 0;

// Calcular el monto de los arrancadores
var montoArrancadoresB3 = arrancadoresB3 * precioArrancadorB3;
var montoArrancadoresC5 = arrancadoresC5 * precioArrancadorC5;
var montoArrancadoresC6 = arrancadoresC6 * precioArrancadorC6;

// Obtener valor de horas de formación
var horasFormacion = parseInt(document.getElementById("horasFormacion").value) || 0;

// Calcular monto del plus por formación
var montoPlusFormacion = horasFormacion * 24.76;
	
    // Calcular el total
    var total = sueldoB3 + sueldoB4 + sueldoC5 + sueldoC6 + horasExtrasB3Diurnas + horasExtrasB3Nocturnas + horasExtrasB4Diurnas + horasExtrasB4Nocturnas + horasExtrasC5Diurnas + horasExtrasC5Nocturnas + horasExtrasC6Diurnas + horasExtrasC6Nocturnas + totalNocturnosB3 + totalNocturnosB4 + totalNocturnosC5 + totalNocturnosC6 + totalSabados + totalDomingos + montoCuartoTurno + montoPlusAsistencia + montoArrancadoresB3 + montoArrancadoresC5 + montoArrancadoresC6 + montoSabado8 + montoDomingo8 + montoPlusFormacion;


    // Mostrar resultados
    var resultadoHTML = "<h3>Resultados:</h3>";
    resultadoHTML += "<p><h9>Sueldo B3: " + sueldoB3.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Sueldo B4: " + sueldoB4.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Sueldo C5: " + sueldoC5.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Sueldo C6: " + sueldoC6.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>H.extras B3 	&#8594;	Dia: " + horasExtrasB3Diurnas.toFixed(2) + " - Noche: " + horasExtrasB3Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>H.extras B4 	&#8594;	Dia: " + horasExtrasB4Diurnas.toFixed(2) + " - Noche: " + horasExtrasB4Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>H.extras C5 	&#8594;	Dia: " + horasExtrasC5Diurnas.toFixed(2) + " - Noche: " + horasExtrasC5Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>H.extras C6 	&#8594;	Dia: " + horasExtrasC6Diurnas.toFixed(2) + " - Noche: " + horasExtrasC6Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Días nocturnos B3: " + totalNocturnosB3.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Días nocturnos B4: " + totalNocturnosB4.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Días nocturnos C5: " + totalNocturnosC5.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Días nocturnos C6: " + totalNocturnosC6.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Sábados cuarto turno (8h): " + montoSabado8.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Domingos cuarto turno (8h): " + montoDomingo8.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Sábados cuarto turno (12h): " + totalSabados.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Domingos cuarto turno (12h): " + totalDomingos.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Plus adscripción 4º turno: " + montoCuartoTurno.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Arrancadores B3/B4: " + montoArrancadoresB3.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Arrancadores C5: " + montoArrancadoresC5.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Arrancadores C6: " + montoArrancadoresC6.toFixed(2) + "</p>"; 
    resultadoHTML += "<p><h9>Plus de asistencia: " + montoPlusAsistencia.toFixed(2) + "</p>";
    resultadoHTML += "<p><h9>Plus por formación: " + montoPlusFormacion.toFixed(2) + "</p>";

    resultadoHTML += "<h8><center>Total de la nómina: " + total.toFixed(2) + "€</center></h8></br>";
    resultadoHTML += "<h7><u>Recordar que el sueldo final es en bruto. Este se podrá revisar en la columna izquierda de nuestra nómina.</u></h7></br>";
    resultadoHTML += "<br><br><h9><i>creador Mateo Fernandez</i></h9>";
    
	document.getElementById("resultado").innerHTML = resultadoHTML;
}
