function mostrar()
{
	//tomo la edad  

	var edad;
	edad = txtIdEdad.value;
	edad = parseInt(edad);

	if (edad < 13)
	{
		alert("Es niño");
	}
	else
		if (edad <18)
		{
			alert("Es adolescente");
		}
		else 
		{
			alert("la persona es mayor de edad")
		}

}//FIN DE LA FUNCIÓN
/*Al ingresar una edad debemos informar si la persona es mayor de edad 
(mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).*/