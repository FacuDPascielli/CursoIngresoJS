function mostrar()
{
	var formadepago;
	var paquete;
	var precio;
	var descuento;
	var preciocondescuento;

	precio=prompt("Ingrese el precio de la habitación para calcular el descuento");
	paquete=prompt("Ingrese el paquete elegido (solo desayunos ó todo incluido)");
	formadepago=prompt("Ingrese forma de pago");

		switch(formadepago)
			{
				case "visa":
				descuento=precio*10/100;
				break;

				case "paypal":
				descuento=precio*15/100;


			}

}
