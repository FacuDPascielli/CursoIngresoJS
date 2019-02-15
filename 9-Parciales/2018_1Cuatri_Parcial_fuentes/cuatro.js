function mostrar()
{
	var cantidad
	var libro1
	var libros
	var formapago
	var recargo10
	var descuento15

	cantidad=prompt("Cuántos libros desea comprar?")
	if(cantidad<2){

		libro1=prompt("Ingrese precio del libro")

		if(libro1>=2000){
			libro1=parseInt(libro1)
			descuento15=libro1-libro1*15/100
			formapago=prompt("Con qué va a efecutar el pago? (efectivo o tarjeta)")
			if(formapago!="efectivo"){
				descuento15=parseInt(descuento15)
				recargo10=descuento15+descuento15*10/100
				alert("Muchas gracias, usted debe abonar $"+recargo10+", ya que se le aplicó un descuento de un 15% por exceder el precio de $2000 y un recargo del 10% por utilizar tarjeta.")
			}else{
				alert("Muchas gracias, usted debe abonar $"+descuento15+", ya que se le aplicó un descuento de un 15% por exceder el precio de $2000")

			}
			
		}else{
			formapago=prompt("Con qué va a efecutar el pago? (efectivo o tarjeta)")
			if(formapago!="efectivo"){
				recargo10=libro1+libro1*10/100
				alert("Muchas gracias, usted debe pagar $"+recargo+", ya que se le aplicó un recargo del 10% por usar tarjeta")
			}else{
				alert("Muchas gracias, usted debe pagar $"+libro1)
			}
			

		}

		
	}else{
		libros=parseInt(libros);

	}


}
