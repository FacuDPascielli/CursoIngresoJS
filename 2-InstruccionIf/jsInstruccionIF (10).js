function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	var numero
	numero=Math.round(Math.random()*10)
	console.log(numero)

	if(numero<4){
		alert(numero+", Vamos, la proxima se puede")

	}else{
		if(numero<9){
			alert(numero+", APROBÓ")
		}else{
			alert(numero+", EXCELENTE")

		}
	}

}//FIN DE LA FUNCIÓN