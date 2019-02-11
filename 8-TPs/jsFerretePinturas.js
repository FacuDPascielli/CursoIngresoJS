/*3.	Para el departamento de Pinturas:
A.	Al ingresar una temperatura en Fahrenheit debemos mostrar la temperatura en Centígrados con un mensaje concatenado (ej.: " 32 Fahrenheit son 0 centígrados").
B.	Al ingresar una temperatura en Centígrados debemos mostrar la temperatura en Fahrenheit (ej.: "0  centígrados son 32 Fahrenheit ").
*/
function FahrenheitCentigrados () 
{
	var f;
	var c;
	var pasaje;

	f=document.getElementById('Temperatura').value;

	f=parseInt(f)

	c=(f-32)*5/9

	alert("Su temperatura es de "+c+"°C")

	

}

function CentigradosFahrenheit () 
{
	var f;
	var c;
	var pasaje;

	c=document.getElementById('Temperatura').value;

	c=parseInt(c);

	f=(c*9/5)+32

	alert("Su temperatura es de "+f+"°F")
}
