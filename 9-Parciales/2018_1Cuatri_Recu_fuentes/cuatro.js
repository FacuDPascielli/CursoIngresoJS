function mostrar()
{
	var primernum;
	var segundonum;
	var tercernum;
	var cuartonum;
	var suma;
	var descuento;
	var preciofin;
	var recargo;
	var mensaje;
	var numeromayor

	primernum=prompt("Ingrese su primer numero");
	segundonum=prompt("Ingrese su segundo numero");
	tercernum=prompt("Ingrese su tercer numero");
	cuartonum=prompt("Ingrese su cuarto numero");

 	primernum=parseInt(primernum);
 	segundonum=parseInt(segundonum);
 	tercernum=parseInt(tercernum);
 	cuartonum=parseInt(cuartonum);

 	suma=primernum+segundonum+tercernum+cuartonum;

 	if(primernum>=segundonum && primernum>=segundonum && primernum>=tercernum)
 		{
 			numeromayor=primernum;
 		}else
 			{
 				if(segundonum>=primernum && segundonum>=tercernum && segundonum>=cuartonum)
 					{
 						numeromayor=segundonum;
 					}else
 						{
 							if(tercernum>=primernum && tercernum>=segundonum && tercernum>=cuartonum)
 								{
 									numeromayor=tercernum;
 								}else
 									{
 										numeromayor=cuartonum;
 									}
 						}
 			}

 	if(suma>=100)
 	{	
 			descuento=suma*10/100,
			preciofin=suma-descuento;
			"Su número más alto es"+numeromayor+", y contaba con un total de $"+suma+", pero menos el descuento por sobrepasar la suma  de $100, ahora tiene un total de $"+preciofin+"."

 	}else
 		{
 			if(suma>=50)
 			{
 					descuento=suma*5/100;
					preciofin=suma-descuento;
					mensaje="Su número más alto es"+numeromayor+", y contaba con un total de $"+suma+", pero menos el descuento por sobrepasar la suma  de $50, ahora tiene un total de $"+preciofin+"."

 			}else
 				{
 						recargo=suma*15/100;
						preciofin=suma+recargo;
						mensaje="Su número más alto es "+numeromayor+", y contaba con un total de $"+suma+", pero más el recargo por no sobrepasar la suma  de $50, ahora tiene un total de $"+preciofin+"."

 				}

 		}
 		
 		alert(mensaje)
}
