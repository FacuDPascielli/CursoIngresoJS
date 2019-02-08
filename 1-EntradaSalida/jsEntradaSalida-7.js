/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	
	var primernumero;
	var segundonumero;
	var suma;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;
   
    primernumero=parseInt(primernumero);
    segundonumero=parseInt(segundonumero);

    suma=primernumero+segundonumero;

    alert("El resultado es: "+suma); 

}

function restar()
{
	
	var primernumero;
	var segundonumero;
	var resta;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;
   
    primernumero=parseInt(primernumero);
    segundonumero=parseInt(segundonumero);

    resta=primernumero-segundonumero;

    alert("El resultado es: "+resta); 

}

function multiplicar()
{ 

	var primernumero;
	var segundonumero;
	var multiplicacion;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;
   
    primernumero=parseInt(primernumero);
    segundonumero=parseInt(segundonumero);

    multiplicacion=primernumero*segundonumero;

    alert("El resultado es: "+multiplicacion); 

	
}

function dividir()
{
	
	var primernumero;
	var segundonumero;
	var division;

	primernumero=document.getElementById('numeroUno').value;
	segundonumero=document.getElementById('numeroDos').value;
   
    primernumero=parseInt(primernumero);
    segundonumero=parseInt(segundonumero);

    division=primernumero/segundonumero;

    alert("El resultado es: "+division); 

}

