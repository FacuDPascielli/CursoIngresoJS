function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var alumno;
	var acumulador;
	var promedio;
	var bandera=true;
	var notabaja
	
	while(contador<5)
	{
		contador++;
		
		nota=prompt("Ingrese su nota (Del 0 al 10).");
		sexo=prompt("Ingrese su sexo (f ó m).");
		acumulador+=nota
		
		do
		{
			nota=prompt("Error, ingrese su nota.");
			nota=parseInt(nota);
		}while(isNaN(num) || (nota<0 || nota>10));
		
		do
		{
			sexo=prompt("Error, ingrese su sexo.");
		}while(sexo!="f" && sexo!="m");

		if(bandera)
		{
			bandera=false;
			notabaja=nota

		}else
			{
				if(nota<notabaja)
					{
						notabaja=nota;
					}
			}
		

		

		
		


	}

promedio=acumulador/contador;





}
