function mostrar()
{
  var precioinicial;
  var preciofinal;
  var iva;

  precioinicial=prompt("Ingrese el valor de su compra");
  precioinicial=parseInt(precioinicial);

  iva=precioinicial*21/100;

  preciofinal=precioinicial+iva;

  alert("El precio final más el iva es de "+preciofinal)




}
