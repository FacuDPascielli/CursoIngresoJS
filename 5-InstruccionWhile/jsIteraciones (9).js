function mostrar()
{

	var contador=0;
	var maximo;
	var minimo;
	var numero;
	var respuesta=true;
	var bandera=true;

	while(respuesta==true)
	{
		contador++;
		do
		{	
			numero=prompt("Ingrese un número");
			numero=parseInt(numero);
			respuesta=confirm("Dese ingresar otro número?");
		}while(isNaN(numero));
		if(bandera==true)
		{
			bandera=false;
			maximo=numero
			minimo=numero
		}else
			{
				if(numero<minimo)
					{
						minimo=numero;
					}
				if(numero>maximo)
					{
						maximo=numero
					}

			}
	
	}

	document.getElementById('maximo').value=maximo
	document.getElementById('minimo').value=minimo




}//FIN DE LA FUNCIÓN