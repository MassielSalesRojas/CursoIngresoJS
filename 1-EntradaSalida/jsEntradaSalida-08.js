/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{

	var dividendo;
	//el numero que queres dividir
	var divisor;
	//el numero por el que divides
	var resto

	dividendo=txtIdNumeroDividendo.value;
	divisor=txtIdNumeroDivisor.value;

	divisor=parseInt(divisor);
	dividendo=parseInt(dividendo);

	resto= dividendo % divisor;

	alert("el resto de la division entre " + dividendo + 
		" y " + divisor + " es " + resto);
}

