
function mostrar()
{
var mascota1;
	var mascota2;
	var peso1;
	var peso2;
	var suma;

	mascota1=prompt("Ingrese el nombre de su primer mascota");
	mascota2=prompt("Ingrese el nombre de su segunda mascota");

	peso1=prompt("Ingrese el peso de su primer mascota");
	peso2=prompt("Ingrese el peso de su segunda mascota");

	peso1=parseInt(peso1);
	peso2=parseInt(peso2);

	suma=peso1+peso2;

	alert("tenes dos mascotas "+mascota1+" y "+mascota2+", que pesan "+peso1+"kg y "+peso2+"kg, la suma de los kilos es "+suma"kg.")

}
