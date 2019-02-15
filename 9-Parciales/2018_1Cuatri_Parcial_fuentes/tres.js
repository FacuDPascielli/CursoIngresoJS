function mostrar()
{
	var precio
	var resultado
	var suma
	var gente
	var cantidad
	var iva

	precio=prompt("Ingrese el precio total");
	precio=parseInt(precio);
	iva=precio+precio*21/100;
	iva=parseInt(iva);
	gente=prompt("Ingrese la cantidad de personas que van pagar");
	gente=parseInt(gente);

	suma=iva+iva*10/100;
	suma=parseInt(suma)
	cantidad=suma/gente



	alert("Su precio inicial era "+iva+" pero con la propina es "+suma+", y como ustedes son "+gente+" personas, cada unx debe pagar "+cantidad+".")

	

}	
	