/*4.	Para el departamento de iluminación:
Tomando en cuenta que todas las lámparas están en oferta al mismo precio de $35 pesos final.
A.	Si compra 6 o más  lamparitas bajo consumo tiene un descuento del 50%. 
B.	Si compra 5  lamparitas bajo consumo marca "ArgentinaLuz" se hace un descuento del 40 % y si es de otra marca el descuento es del 30%.
C.	Si compra 4  lamparitas bajo consumo marca "ArgentinaLuz" o “FelipeLamparas” se hace un descuento del 25 % y si es de otra marca el descuento es del 20%.
D.	Si compra 3  lamparitas bajo consumo marca "ArgentinaLuz"  el descuento es del 15%, si es  “FelipeLamparas” se hace un descuento del 10 % y si es de otra marca un 5%.
E.	Si el importe final con descuento suma más de $120  se debe sumar un 10% de ingresos brutos en informar del impuesto con el siguiente mensaje:
 ”Usted pago X de IIBB.”, siendo X el impuesto que se pagó. 

 */
function CalcularPrecio () 
{
 	var cantidadlam;
 	var precio;
 	var marcas;
 	var descuento;
 	var preciodesc;
 	var mensaje;
 	var iibb;
 	var descuentorecargo

 	marcas=document.getElementById('Marca').value;
 	cantidadlam=document.getElementById('Cantidad').value;
 	preciodesc=document.getElementById('precioDescuento').value;
 	cantidadlam=parseInt(cantidadlam);
 	precio=cantidadlam*35;
 	

 	if(cantidadlam>5)
 	{
 		precio=parseInt(precio);
 		descuento=precio-precio*50/100;
 		mensaje=descuento

 	}else
 		{
 			if(cantidadlam==5)
 	{
 			if(marcas=="ArgentinaLuz")
 	{
 		precio=parseInt(precio);
 		descuento=precio-precio*40/100;
 		mensaje=descuento;
 	}
 	else
 		{
 		precio=parseInt(precio);
 		descuento=precio-precio*30/100;
 		mensaje=descuento;
 		}		

 	}else
 		{	if(cantidadlam==4)
 	{
 			if(marcas=="ArgentinaLuz" || marcas=="FelipeLamparas")
 	{

 		precio=parseInt(precio);
 		descuento=precio-precio*25/100;
 		mensaje=descuento;
 	}else
 		{

 		precio=parseInt(precio);
 		descuento=precio-precio*20/100;
 		mensaje=descuento;


 		}

 	}else
 		{
 			if(cantidadlam==3)
 	{
 		if(marcas="ArgentinaLuz")
 	{
 		precio=parseInt(precio);
 		descuento=precio-precio*15/100;
 		mensaje=descuento;


 	}else
 		{

 		if(marcas="FelipeLamparas")
 	{
 		precio=parseInt(precio);
 		descuento=precio-precio*10/100;
 		mensaje=descuento;

 	}else
 		{

 		precio=parseInt(precio);
 		descuento=precio-precio*5/100;
 		mensaje=descuento;
 		}

 		}

 		

 	}



 		}


 		}
 			

 		}else
 		{
if(mensaje>120)
 	{	
 		mensaje=parseInt(mensaje);
 		iibb=mensaje*10/100;
 		;
		alert("Usted pago $"+iibb+" de IIBB. ");
		descuentorecargo=mensaje+iibb
		document.getElementById('precioDescuento').value=descuentorecargo

 	}else
 		{
 			mensaje=preciodesc

 			document.getElementById('precioDescuento').value=preciodesc

 		}
 		
 		}



 		

























}
