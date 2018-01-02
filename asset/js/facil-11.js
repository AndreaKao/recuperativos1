/*
Diseñar un programa que lea las calificaciones
de un alumno (10 notas en total). Debes calcular
e imprimir su promedio, y decir a través de un alert
si el ramo fue aprobado o no. Las notas van de 1 a 7
y se aprueba con un promedio igual o mayor a 4
*/


function promedioNotas(){
	var nota=[5,6,7,4,5,5,7,6,7,7]; /* Variable que contiene
	los elementos qe son las 10 notas dentro de un arreglo*/
	var suma=0; /* la variable suma se inicia desde 0,
	acá se almacena la suma total de los elementos del
	arreglo de la variable notas*/

	for (var i=0; i<notas.length; i++) {
	/* Se inicia un ciclo for
		para itinerar a cada uno de los elementos del arreglo
		por ello la variable indice (i) debe comenzar desde la posición 0,
		debe ser menor a la cantidad de elementos que están dentro del arreglo
		y por último el i++ nos permite que la itineración avance de un elemento en uno*/
		suma+=nota[i];
		/* Acá la variable suma por orden desde el primer elemento en adelante (nota[i]),
			serán guardados dentro de esta variable suma y al ir añadiendole los números
			que lo siguen estos se van sumando*/
	}
	var promedio=(suma/10);
	/*La variable promedio guarda la suma de todas las notas
		y se divide por 10 para tener el promedio final*/

		if (promedio > 4) {
		/* Entonces si el promedio es mayor a 4 aparecerá un alert
		diciendo que el ramo está aprobado, pero en caso contrario
		si eñ promedio final es menor a 4, aparecerá un alert
		diciendo que el ramo está reprobado*/
  	 	alert(promedio + " Ramo Aprobado");
		} else {
    	alert(promedio + " Ramo Reprobado");
		}
} promedioNotas()
