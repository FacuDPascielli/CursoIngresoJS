function mostrar()
{
	var marca;
	var peso;
	var temperatura;
	var respuesta=true;
	var contador=0;
	var contadortemperaturaspares=0;
	var marcaproductomáspesado;
	var contadorproductosmenoscerogrados=0;
	var promediopeso;
	var acumuladorpesos=0;
	var pesomaximo;
	var pesominimo;
	var bandera=true;

	while(respuesta==true)
	{
		contador++;

		do
		{
			marca=prompt("Ingrese la marca del producto")
		}while(marca=="");

		do
		{
			peso=prompt("Ingrese el peso del producto");
			peso=parseInt(peso);
		}while(isNaN(peso) || (peso<1 || peso>100));

		acumuladorpesos+=peso;

		do
		{
			temperatura=prompt("Ingrese la temperatura de almacenamiento del producto");
			temperatura=parseInt(temperatura);
		}while(isNaN(temperatura) || (temperatura<-30 || temperatura>30));

		if(temperatura%2==0)
		{
			contadortemperaturaspares++;
		}

		if(bandera)
		{
			bandera=false;
			pesominimo=peso;
			pesomaximo=peso;
			marcaproductomáspesado=marca;
		}else
			{
				if(pesominimo>peso)
				{
					pesominimo=peso;
				}

				if(pesomaximo<peso)
				{
					pesomaximo=peso;
					marcaproductomáspesado=marca;
				}
			}

		if(temperatura<0)
		{
			contadorproductosmenoscerogrados++;
		}

		respuesta=confirm("Desea ingresar otro producto?");
	}

	promediopeso=acumuladorpesos/contador;
	document.write("La cantidad de temperaturas pares es de "+contadortemperaturaspares+". La marca del producto más pesado es "+marcaproductomáspesado+". La cantidad de productos que se conservan a menos de cero grados es de "+contadorproductosmenoscerogrados+". El promedio del peso de todos los productos es de "+promediopeso+". Y por último, el peso máximo es de "+pesomaximo+", y el mínimo de "+pesominimo+".");

}
