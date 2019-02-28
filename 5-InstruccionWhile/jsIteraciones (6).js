function mostrar()
{

	var contador=0;
	var acumulador=0;
	var num;

	while(contador<5)
	{
		contador++;
		do
		{
			num=prompt("Ingrese un número");
			num=parseInt(num);
		
			
		}while(isNaN(num))
			{
				acumulador+=num;
			}
	
		
	}


document.getElementById('suma').value=acumulador;
document.getElementById('promedio').value=acumulador/contador;

}//FIN DE LA FUNCIÓN