function mostrar()
{
	//tomo la edad  

	var edad;
	edad=txtIdEdad.value;
	edad=parseInt(edad);

	if (edad >17)
	{
		alert("Es mayor de edad");
	}
	else 
	{
		alert("Es menor de edad");
	}

}//FIN DE LA FUNCIÓN

/*Al ingresar una edad debemos 
informar si la persona es mayor de edad, 
sino informar que es un menor de edad.*/