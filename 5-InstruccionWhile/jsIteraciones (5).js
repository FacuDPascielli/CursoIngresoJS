function mostrar()
{

var sex = prompt("ingrese f ó m .");



	while(sex!="f" || sex!="m")
		{
			sex = prompt("ingrese f ó m .");
		}

		document.getElementById('Sexo').value=sex;


}//FIN DE LA FUNCIÓN