/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var NumeroUno;
	var NumeroDos;
	var Suma;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	
	Suma = NumeroUno + NumeroDos;
	alert("La suma es " + Suma);	
}

function restar()
{
	var NumeroUno;
	var NumeroDos;
	var Resta;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	
	Resta = NumeroUno - NumeroDos;
	alert("La resta es " + Resta);
}

function multiplicar()
{ 
	var NumeroUno;
	var NumeroDos;
	var multiplicar;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	
	multiplicar = NumeroUno * NumeroDos;
	alert("El resultado es " + multiplicar);
}

function dividir()
{
	var NumeroUno;
	var NumeroDos;
	var dividir;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;

	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	
	dividir = NumeroUno / NumeroDos;
	alert(dividir);
}

