/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var NumeroUno;
	var NumeroDos;
	var Suma;

	NumeroUno = txtIdNumeroUno.value;
	NumeroDos = txtIdNumeroDos.value;
	/*ERROR
	 Se concatenaron en vez de sumar
	 Suma = NumeroUno + NumeroDos;
	 alert (numeroUno + suma + numeroDos);*/

	NumeroUno = parseInt(NumeroUno);
	NumeroDos = parseInt(NumeroDos);
	//ParseInt sirve para convertir el texto en numero
	Suma = NumeroUno + NumeroDos;
	alert("La suma es " + Suma);
}
	//txtIdNumeroUno
	//txtIdNumeroDos

