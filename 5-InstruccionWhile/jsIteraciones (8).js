function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=1;
	var numero;
	var suma;
	var respuesta='si';
	var acumulador;
	
	while(respuesta==true)
	{
		contador++;
		do
		{	
			numero=prompt("Ingrese un número");
			numero=parseInt(numero);
			respuesta=confirm("Dese ingresar otro número?");
		}while(isNaN(numero));
			if(num>=0)
			{
				suma+=numero
			}else
				{
					negativo*=numero
				}
	}
		

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN