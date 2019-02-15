function mostrar()
{
	var precioinicial;
  	var preciofinal;
  	var iva;

  	precioinicial=document.getElementById('elNombre').value;
  	preciofinal=document.getElementById('laLocalidad').value;
  	precioinicial=parseInt(precioinicial);

  	iva=precioinicial*21/100;

 	 preciofinal=precioinicial+iva;

  	document.getElementById('laLocalidad').value=preciofinal;

  
}
