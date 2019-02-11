function mostrar()
{
	var precio;
	var descuento;
	var preciofinal;

	precio=prompt("Ingrese el precio:");
	descuento=prompt("Ingrese el descuento que desea:");

	descuento=parseInt(descuento);
	precio=parseInt(precio);

	preciofinal=document.getElementById('elPrecioFinal').value;

	preciofinal=precio-precio*descuento/100;

	document.getElementById('elPrecioFinal').value=preciofinal;


}
