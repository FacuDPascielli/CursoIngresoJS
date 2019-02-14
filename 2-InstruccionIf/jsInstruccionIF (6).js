function mostrar()
{
//tomo la edad  
	var edad
	edad=document.getElementById('edad').value

	if(edad<13){
		alert("sos un niño")
	}else{
		if(edad<18){
			alert("Sos adolescente")
			

	}else{
		alert("Sos mayor de edad")
		}
	}
	
	/* var edad
	edad=document.getElementById('edad').value;

	if(edad<13){
		alert("Usted  es un niño")
	}else{
		if(edad<18){
				alert("Usted es adolescente")
			}else{
				alert("Usted es mayor de edad")
			}
	}

	*/

	
	



}//FIN DE LA FUNCIÓN