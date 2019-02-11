
function mostrar()
{
	var largo;
	var ancho;
	var perimetro;

	largo= prompt("Ingrese el largo del rectángulo");
	ancho= prompt("Ingrese el ancho del rectángulo");

	largo= parseInt(largo);
	ancho= parseInt(ancho);

	perimetro= 2*(largo+ancho);

	alert("El perímetro es: "+perimetro);
}
