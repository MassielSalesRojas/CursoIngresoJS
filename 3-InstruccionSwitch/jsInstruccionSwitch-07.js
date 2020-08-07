function mostrar()
{
	var destinoIngresado 
	destinoIngresado=txtIdDestino.value;

	switch (destinoIngresado)
	{
		case "Bariloche":
			alert("Se encuentra en Este");
			break;
		case "Cataratas":
			alert("Se encuentra en ");
			break;
		case "Mar del plata":
			alert("Se encuentra en ");
			break;
		case "Cordoba":
			alert("Se encuentra en Norte ");
			break;
	}

}//FIN DE LA FUNCIÓN

/*Al selecionar un destino , 
indicar el punto cardinal de nuestro pais en donde 
se encuentra Norte, Sur, Este u Oeste*/