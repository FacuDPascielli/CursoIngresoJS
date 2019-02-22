function mostrar()
{

	var numero = prompt("ingrese un número entre 0 y 10.");

	while(numero>10 || numero<1)
		{
			numero = prompt("Error, ingrese un número entre 0 y 10.");
		}
		
		alert(numero);

}//FIN DE LA FUNCIÓN