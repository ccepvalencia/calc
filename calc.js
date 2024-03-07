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

    // Calcular monto adicional por 4º turno
    var montoCuartoTurno = 0;
    if (cuartoTurno === "si") {
        montoCuartoTurno = 108.70;
    }

    // Calcular el total
    var total = sueldoB3 + sueldoB4 + sueldoC5 + sueldoC6 + horasExtrasB3Diurnas + horasExtrasB3Nocturnas + horasExtrasB4Diurnas + horasExtrasB4Nocturnas + horasExtrasC5Diurnas + horasExtrasC5Nocturnas + horasExtrasC6Diurnas + horasExtrasC6Nocturnas + totalNocturnosB3 + totalNocturnosB4 + totalNocturnosC5 + totalNocturnosC6 + totalSabados + totalDomingos + montoCuartoTurno;

    // Mostrar resultados
    var resultadoHTML = "<h3>Resultados:</h3>";
    resultadoHTML += "<p>Sueldo B3: " + sueldoB3.toFixed(2) + "</p>";
    resultadoHTML += "<p>Sueldo B4: " + sueldoB4.toFixed(2) + "</p>";
    resultadoHTML += "<p>Sueldo C5: " + sueldoC5.toFixed(2) + "</p>";
    resultadoHTML += "<p>Sueldo C6: " + sueldoC6.toFixed(2) + "</p>";
    resultadoHTML += "<p>H.extras B3 	&#8594;	Dia: " + horasExtrasB3Diurnas.toFixed(2) + " - Noche: " + horasExtrasB3Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p>H.extras B4 	&#8594;	Dia: " + horasExtrasB4Diurnas.toFixed(2) + " - Noche: " + horasExtrasB4Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p>H.extras C5 	&#8594;	Dia: " + horasExtrasC5Diurnas.toFixed(2) + " - Noche: " + horasExtrasC5Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p>H.extras C6 	&#8594;	Dia: " + horasExtrasC6Diurnas.toFixed(2) + " - Noche: " + horasExtrasC6Nocturnas.toFixed(2) + "</p>";
    resultadoHTML += "<p>Días nocturnos B3: " + totalNocturnosB3.toFixed(2) + "</p>";
    resultadoHTML += "<p>Días nocturnos B4: " + totalNocturnosB4.toFixed(2) + "</p>";
    resultadoHTML += "<p>Días nocturnos C5: " + totalNocturnosC5.toFixed(2) + "</p>";
    resultadoHTML += "<p>Días nocturnos C6: " + totalNocturnosC6.toFixed(2) + "</p>";
    resultadoHTML += "<p>Días trabajados en Sábado: " + totalSabados.toFixed(2) + "</p>";
    resultadoHTML += "<p>Días trabajados en Domingo: " + totalDomingos.toFixed(2) + "</p>";
    resultadoHTML += "<p>Plus adicional adscripción 4º turno: " + montoCuartoTurno.toFixed(2) + "</p>";
    resultadoHTML += "<h3>Total de la nómina: " + total.toFixed(2) + "€</h3>";

    document.getElementById("resultado").innerHTML = resultadoHTML;
}
