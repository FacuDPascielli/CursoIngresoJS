function mostrar()
{
	var nota;
	var sexo;
	var contador=0;
	var alumno;
	var acumulador=0;
	var promedio;
	var bandera=true;
	var notabaja
	var sexonotabaja;
	var acumuladormasculino=0;
	
	while(contador<5)
	{
		contador++;

		do
		{
		nota=prompt("Ingrese su nota.");
		nota=parseInt(nota);
		}while(isNaN(nota) || (nota<0 || nota>10))
		{
			acumulador+=nota;
		}
		
		do
		{
		sexo=prompt("Ingrese su sexo.");
		}while(sexo!='f' && sexo!='m');
		
		
		
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
		if(notabaja==nota && sexo=="f")
		{
			sexonotabaja=sexo;
		}
		if(notabaja==nota && sexo=="m")
			{
				sexonotabaja=sexo;
			}
		
		if(sexo='m' && nota>=6)
		{
			acumuladormasculino+=1
		}
			

	}
	
	promedio=acumulador/contador; 
	alert("La nota más baja es "+notabaja+", y es de sexo "+sexonotabaja+". El promedio general es de "+promedio+". Y por último la cantidad de varones que su nota ha sido mayor o igual a 6 es de "+acumuladormasculino+".");
		

}		