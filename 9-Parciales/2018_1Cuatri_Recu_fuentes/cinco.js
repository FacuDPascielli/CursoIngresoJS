function mostrar()
{
	var formadepago;
	var paquete;
	var precio;
	var descuento;
	var preciocondescuento;

	alert("Por favor escribir tanto la forma de pago como el paquete todo junto y en minúsculas. Muchas gracias.");
	precio=prompt("Ingrese el precio de la habitación para calcular el descuento");
	paquete=prompt("Ingrese el paquete elegido");
	formadepago=prompt("Ingrese forma de pago");
	precio=parseInt(precio);
	descuento=parseInt(descuento);
		switch(formadepago)
			{
				case "visa":
				case "mercadopago":
				descuento=precio*10/100;
				break;

				case "paypal":
				switch(paquete)
				{
					case "todoincluido":
					descuento=precio*25/100;
					break;
					
					default:
					descuento=descuento=precio*15/100;
					break;
				}
				
				break;

				case "efectivo":
				switch(paquete)
				{
					case "todoincluido":
					descuento=precio*35/100;
					break;

					case "solodesayunos":
					descuento=precio*30/100;
					break;
					
					default:
					descuento=descuento=precio*20/100;
				}
				
				break;

				default:
				descuento=precio*5/100;
				break;

			}


	preciocondescuento=precio-descuento;
	alert("Usted debe pagar un total de $"+preciocondescuento);

}
