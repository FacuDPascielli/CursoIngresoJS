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
 	var mensaje;
 	var iibb;
 	var recargo;
 	var preciofinal

 	marcas=document.getElementById('Marca').value;
 	cantidadlam=document.getElementById('Cantidad').value;
 	preciodesc=document.getElementById('precioDescuento').value;
 	precio=35;
 	precio=parseInt(precio)
 	
 	switch(cantidad)
 	{
 		case "5":
 			switch(marcas)
 			{
				case "ArgentinaLuz":

				 					descuento=precio*cantidadlam*0.4;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					document.getElementById('precioDescuento').value=preciofinal;
				 	break;

				 				default:
				 						descuento=precio*cantidadlam*0.3;
				 						descuento=parseInt(descuento);
				 						preciofinal=precio-descuento;
				 						document.getElementById('precioDescuento').value=preciofinal;
				 	break;
 			
 			}
 				

 					break;

 		case "4":
 			switch(marcas)
 			{
 				case "ArgentinaLuz":
				 					descuento=precio*cantidadlam*0.25;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					document.getElementById('precioDescuento').value=preciofinal;

				 					break;

				case "FelipeLamparas":
									descuento=precio*cantidadlam*0.25;
 									descuento=parseInt(descuento);
 									preciofinal=precio-descuento;
 									document.getElementById('precioDescuento').value=preciofinal;

 									break;
 				default:
 									descuento=precio*cantidadlam*0.2;
 									descuento=parseInt(descuento);
 									preciofinal=precio-descuento;
 									document.getElementById('precioDescuento').value=preciofinal;


 			}

 			
 					break;

 		case "3":
 			switch(marcas)
 			{
				case "ArgentinaLuz":
				 					descuento=precio*cantidadlam*0.15;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					document.getElementById('precioDescuento').value=preciofinal;

				 					break;
				case "FelipeLamparas":
 			}
 			/*
 			if(marcas=="ArgentinaLuz")
 				{
 					descuento=precio*cantidadlam*0.15;
 					descuento=parseInt(descuento);
 					preciofinal=precio-descuento;
 					document.getElementById('precioDescuento').value=preciofinal;


 				}else
 					{
 						if(marcas=="FelipeLamparas")
 						{
 							descuento=precio*cantidadlam*0.10;
 							descuento=parseInt(descuento);
 							preciofinal=precio-descuento;
 							document.getElementById('precioDescuento').value=preciofinal;


 						}else
 							{
 								descuento=precio*cantidadlam*0.05;
 								descuento=parseInt(descuento);
 								preciofinal=precio-descuento;
 								document.getElementById('precioDescuento').value=preciofinal;

 							}


 					}
*/
 					break;

 			





 		default:
 		if(cantidadlam>=6)
 		{

 			descuento=precio*cantidadlam*0.5;
 			descuento=parseInt(descuento);
 			preciofinal=precio-descuento;
 			document.getElementById('precioDescuento').value=preciofinal;
 		

 		}else
 			{
 				if(cantidadlam<=2)
 				{
 					preciofinal=precio*cantidadlam;
 					document.getElementById('precioDescuento').value=preciofinal;
 				}

 			}








 	}

 	

}
