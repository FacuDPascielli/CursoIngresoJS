/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
	var sueldoinicial;
	var sueldofinal;
	var porcentaje;

	sueldoinicial= document.getElementById('sueldo').value;
	sueldofinal= document.getElementById('resultado').value;
	
	sueldoinicial=parseInt(sueldoinicial);
	
	porcentaje= (sueldoinicial*10/100);
	

	sueldofinal=sueldoinicial+porcentaje;


	document.getElementById('resultado').value = sueldofinal;

}
