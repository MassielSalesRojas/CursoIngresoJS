/* 
Debemos lograr tomar un dato por 'PROMPT' 
y lo muestro por 'ID' al presionar el botón 'mostrar'
*/
function mostrar()
{
	var Nombre;
	Nombre = prompt ("Ingrese su Nombre", "Ej: Massiel Sales");
	//document.getElemenyById("txtIdNombre").value = Nombre;
	txtIdNombre.value=Nombre;

	alert("Ok");
}

