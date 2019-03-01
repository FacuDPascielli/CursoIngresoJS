function mostrar()
{

	var contadorpositivo=0;
	var acumuladornegativo=0;
	var acumuladorpositivo=0;
	var suma;
	var respuesta=true;
	var numero;
	var contadornegativo=0;
	var contadordeceros=0;
	var contadordepares=0;
	while(respuesta=true)
	{
		contador++;
		do
		{
			numero=prompt("Ingrese un número");
			numero=parseInt(numero);
		}while(isNaN(numero));

		if(num<0)
		{
			acumuladornegativo=acumuladornegativo+numero;
			contadornegativo=0
		}else
			{
				acumuladorpositivo+=numero;
				contadorpositivo++;
			}else
				{
					contadordeceros++;
				}
		if(num%2==0)
		{
			contadordepares++;
		}

	
		respuesta=confirm("Desea ingresar otro numero?")
	}




}//FIN DE LA FUNCIÓN