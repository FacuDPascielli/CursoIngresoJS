/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var importeinicial;
	var importefinal;
	var porcentaje;

	importeinicial = document.getElementById('importe').value;
	importefinal = document.getElementById('resultado').value;

	importeinicial = parseInt(importeinicial);
	
	porcentaje =  (importeinicial*25/100);

	importefinal  = importeinicial-porcentaje;

	document.getElementById('resultado').value = importefinal;
}
