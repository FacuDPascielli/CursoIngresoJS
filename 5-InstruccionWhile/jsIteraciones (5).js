function mostrar()
{

	var sexo = prompt("Ingrese su Sexo ('f' ó 'm').");
	

	while(sexo != "f" && sexo != "m")
		{
			sexo = prompt("Error, ingrese su Sexo ('f' ó 'm').");
		}

			document.getElementById('Sexo').value=sexo;


}//FIN DE LA FUNCIÓN