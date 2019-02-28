function mostrar()
{

	var contador=0;
	var positivo=0;
	var negativo=0;
	var numero;
	var suma;
	var respuesta=true;
	var acumulador;
	
	while(respuesta==true)
	{
		contador++;
		do
		{	
			numero=prompt("Ingrese un número");
			numero=parseInt(numero);
		}while(isNaN(numero));
			
			if(numero>=0)
			{
				positivo+=numero;
			}
			else
			{
				negativo*=numero;
			}
		
		respuesta=confirm("Desea ingresar otro número?");
	}
		

document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN