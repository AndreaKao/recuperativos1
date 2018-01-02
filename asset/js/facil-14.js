/*
Dado un arreglo de 10 números, retornar
un nuevo arreglo solo con los números pares.
Ejemplo:
input arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
output nuevoArr = [2, 4, 6, 8, 10]
*/

function pairElements (arr){
	var newArr = []; /*es un nuevo arreglo vacío para guardar los números pares*/
	for (var i=0; i<= arr.length - 1; i++) { /* La variable indice comienza
		iterando en 0 iterando hasta la longitud del array -1
		(porque la cantidad de los elementos son 10 pero el indice
		comienza en 0 y la longitud comienza de 1 y el indice de 0),
		de uno en uno*/
		if (arr[i] % 2 == 0) { /* Por cada iteración del for comprueba
			si cada elemento del array es par */
			newArr.push(arr[i]); /* cada nuevo elemento que sea par será
			guardado en la variable newArr gracias a push */
		}
	}
	return newArr; /* Retornará el nuevo array que contará
	todos los números pares guardados */
}
