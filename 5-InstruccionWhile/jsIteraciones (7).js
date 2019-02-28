function mostrar()
{

	var contador=0;
	var acumulador=0;
	var respuesta='si';
	var num

	while(respuesta=='si')
	{
		contador++
		do
		{
			num=prompt("Ingrese un número")
			num=parseInt(num);
			respuesta=prompt("Desea ingresar otro número?");
		}while(isNaN(num))
		{
			acumulador+=num;
		}
	}
	

document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN