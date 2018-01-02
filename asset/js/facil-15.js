/*
Problema fácil 15 (20 puntos):
Dado un arreglo de 4 números positivos, devolver un nuevo arreglo
con cada elemento multiplicado por 12.
Ejemplo:
input arr = [1, 2, 3, 4]
output nuevoArr = [12, 24, 36, 48]
*/

function multiElements (arr){
	var newNumbers = []; /*es un nuevo arreglo vacío para guardar
	los elementos de array multiplicados por 12*/
	for (var i=0; i<= arr.length - 1; i++) { /* La variable indice comienza
		en 0 iterando hasta la longitud del array -1
		(porque la cantidad de los elementos son 10 pero el indice
		comienza en 0 y la longitud comienza de 1 y el indice de 0),
		de uno en uno*/
		var multi = arr[i] *12;
		/* la variable i es el indice y arr es el arreglo esto indica
		que esto es el elemento que le corresponde al indice de la iteración*/
			newNumbers.push(multi);
			/* cada nuevo elemento que sea par será guardado en la variable
			newNumber gracias a push */
			}
			return newNumbers; /* Retornará el nuevo array que contará todos
			los números multiplicados por 12 */
	}
	
	multiElements([1,2,3,4])