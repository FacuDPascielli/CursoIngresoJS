function mostrar()
{
	var planeta

	planeta=prompt("Ingrese un planeta de nuestro sistema solar. Ej: Tierra, Venus, etc");

	switch(planeta)
	{
		case "tierra":
			alert("Acá vivimos.")
			break;

		case "mercurio":
		case "venus":
		case "marte":
			alert("Acá hace más calor.")
			break;

		case "júpiter":
		case "jupiter":
		case "saturno":
		case "urano":
		case "neptuno":
			alert("Acá hace más frio.")
			break;

		default:
			alert("Ese planeta no existe o no pertenece a nuestro sistema solar.")





	}



}
