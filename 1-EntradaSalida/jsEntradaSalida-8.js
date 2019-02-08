/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
	var numdivisor;
	var  numdividendo;
	var numresto;

	numdivisor= document.getElementById('numeroDivisor').value;
	numdividendo= document.getElementById('numeroDividendo').value;

	numdivisor= parseInt(numdivisor);
	numdividendo= parseInt(numdividendo);

	numresto= (numdividendo % numdivisor);

	alert("el resto es "+numresto);
}