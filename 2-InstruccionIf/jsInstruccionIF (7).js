function mostrar()
{
//tomo la edad  
	var estadocivil
	var edad
	edad=document.getElementById('edad').value;
	estadocivil=document.getElementById('estadoCivil').value;
	

	if(edad<18 && estadocivil!="Soltero"){
		alert("Usted es muy pequeño para NO ser soltero")
	}

	


}//FIN DE LA FUNCIÓN