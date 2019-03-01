function mostrar()
{
	var contador=0;
	var kilometros;
	var acumuladorvel=0;
	var combustible;
	var velocidadbaja;
	var combustiblevelocidadbaja;
	var cantidadcombustiblesliquidos=0;
	var velocidadmasaltacombustiblesolido;
	var bandera=true;
	var velocidadalta;
	var velocidadaltasolido;
	



	while(contador<5)
	{
		contador++;
		
		do
		{
			kilometros=prompt("Ingrese la velocidad en kilómetros");
			kilometros=parseInt(kilometros);
		}while(isNaN(kilometros) || (kilometros<0 || kilometros>250));


			
				acumuladorvel+=kilometros
			

		do
			{
				combustible=prompt("Ingrese el tipo de combustible(Liquido(l) ó sólido(s)).");

			}while(combustible!='s' && combustible!='l')

		if(bandera)
			{
				bandera=false;
				velocidadbaja=kilometros;
				velocidadalta=kilometros;
				combustiblevelocidadbaja=combustible;
			}else
				{
					if(velocidadbaja>kilometros)
					{
						velocidadbaja=kilometros;
						combustiblevelocidadbaja=combustible;
					}
					if(velocidadalta<kilometros)
					{
						velocidadalta=kilometros;
						velocidadaltasolido=kilometros;
					}
				}
		
		if(velocidadbaja==kilometros && combustible=='s')
			{
				combustiblevelocidadbaja=combustible;
			}
		if(velocidadbaja==kilometros && combustible=='l')
			{
				combustiblevelocidadbaja=combustible;
			}

		
		if(velocidadalta==kilometros && combustible=='s')
			{
				
			}
		
		if(kilometros>100 && combustible=='l')
			{
				cantidadcombustiblesliquidos+=1;
			}
	}



	promedio=acumuladorvel/contador;
	alert("El promedio de las velocidades es de "+promedio+". La velocidad más baja es "+velocidadbaja+" y posee combustible "+combustiblevelocidadbaja+". La cantidad de combustibles líquidos que superan los 100km/h es de "+cantidadcombustiblesliquidos+". Y por último, la velocidad más alta de los combustibles sólidos es de "+velocidadaltasolido+".");



}
