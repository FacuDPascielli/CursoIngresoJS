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
 	precio=35*cantidadlam;
 	precio=parseInt(precio)
 	
 	switch(cantidadlam)
 	{
 		case "5":
 			switch(marcas)
 			{
				case "ArgentinaLuz":

				 					descuento=precio*40/100;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					
				 	break;

				 				default:
				 						descuento=precio*30/100;
				 						descuento=parseInt(descuento);
				 						preciofinal=precio-descuento;
				 						
 			
 			}
 				

 					break;

 		case "4":
 			switch(marcas)
 			{
 				case "ArgentinaLuz":
				 					descuento=precio*25/100;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					

				 					break;

				case "FelipeLamparas":
									descuento=precio*25/100;
 									descuento=parseInt(descuento);
 									preciofinal=precio-descuento;
 									
 									break;
 				default:
 									descuento=precio*20/100;
 									descuento=parseInt(descuento);
 									preciofinal=precio-descuento;
 									

 			}

 			
 					break;

 		case "3":
 			switch(marcas)
 			{
				case "ArgentinaLuz":
				 					descuento=precio*15/100;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					
				 					break;
				case "FelipeLamparas":
 		
									descuento=precio*10/100;
				 					descuento=parseInt(descuento);
				 					preciofinal=precio-descuento;
				 					
				 					break;


				default:
									descuento=precio*5/100;
 									descuento=parseInt(descuento);
 									preciofinal=precio-descuento;
 						
 								
 									break;
 			

 			}
 		

 									break;

 			





 		default:
 		if(cantidadlam>=6)
 		{

 			descuento=precio*50/100;
 			descuento=parseInt(descuento);
 			preciofinal=precio-descuento;
 			
 		

 		}else
 			{
 				if(cantidadlam<=2)
 				{
 					preciofinal=precio;
 					
 				}

 			}








 	}


 	if(preciofinal>=120)
 	{
 		iibb=preciofinal*0.10;
 		alert("Usted pagó $"+preciofinal+", pero a eso se le agregó un recargo del 10% de $"+iibb+" .")
 		preciofinal=preciofinal+iibb

 		document.getElementById('precioDescuento').value=preciofinal;
 		

 	}else
 		{

 			document.getElementById('precioDescuento').value=preciofinal;
 		}

}
