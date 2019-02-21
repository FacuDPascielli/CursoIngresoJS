function mostrar()
{

	var number = prompt("ingrese un número entre 0 y 10.");

	while(number>10 || number<0)
		{
			number = prompt("ingrese un número entre 0 y 10.")
		}

	document.getElementById('Numero').value=number;

}//FIN DE LA FUNCIÓN