function mostrar()
{
	var contador=0
	var pais;
	var superficie;
	var respuesta=true;
	var acumuladorpaisesmenor100=0;
	var acumuladorpaisesmayor100=0;
	var acumuladorpaisesiguales100=0;
	var acumuladorsuperficie=0;
	var bandera=true;
	var contadorimpar=0;
	var superficieminima;
	var contadordeimpares=0;
	var acumulador=0;

	while(respuesta==true)
	{
		contador++;
		
		do
		{
			pais=prompt("Ingrese un país");
		}while(pais="");	
			

		do
		{
			superficie=prompt("Ingrese la superficie")

		}while(isNaN(superficie));
		
		acumulador+=superficie;
		
		
		
		if(superficie>100)
		{
			acumuladorpaisesmayor100+=1
		}else
			{
				acumuladorpaisesmenor100+=1
			}
		if(superficie==100)
		{
			acumuladorpaisesiguales100+=1
		}

		if(bandera)
			{
				bandera=false;
				superficieminima=superficie;
			}else
				{
					if(superficieminima>superficie)
					{
						superficieminima=superficie;
					}
				}
		if(superficie>0)
		{
			if(superficie%1==0)
			{
				contadordeimpares+=1;
			}
		}
		
		respuesta=confirm("Desea ingresar otro país?");
		
	}
		
	promedio=acumulador/contador;
	document.write("La cantidad de países con superficie impar es "+contadordeimpares+".La cantidad de países con superficie menor a 100 es "+acumuladorpaisesmenor100+". La cantidad de países con superficie igual a 100 es "+acumuladorpaisesiguales100+". El nombre del primer país que superó los 100 de superficie. El promedio de kilómetros ingresados es "+promedio+". El nombre del que menos territorio tiene.")
}
