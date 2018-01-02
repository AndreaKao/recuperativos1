/*
Dados dos arreglos, devolver un nuevo arreglo
que contenga la suma de los índices de cada array,
arr1[índice 0] + arr2[índice 0] = nuevoArr[indice 0]
Ejemplo:
arr1 = [1, 2, 3, 4]
arr2 = [5, 6, 7, 8]
retorna nuevoArr = [6, 8, 10, 12]
*/

   var arr1 = [1, 2, 3, 4];
   var arr2 = [5, 6, 7, 8];

   function sumaArreglos(arr1,arr2){
   var newArr = []; /* Esta variable es un arreglo vacío que permite agregar
   nuevos datos obtenidos de newArr[i] es decir recolecta las sumas 
   de arr1 y arr2 (de ambos arreglos) en las mismas posiciones*/
   var totalSuma = 0; /*Variable totalSuma es el que guarda la suma de los elementos*/


    for (var i = 0; i < arr1.length; i++) { /* itera con for, porque la variable 
      indice comienza de la posicion 0, luego indice debe ser menor al largo de arr1
      y con i++ permite avanzar en cada número*/ 
      for (var j = 0; j < arr2.length; j++) { /* itera con for, porque la variable 
      indice comienza de la posicion 0, luego indice debe ser menor al largo de arr2
      y con i++ permite avanzar en cada número*/
        totalSuma = arr1[i]+arr2[i]; /* totalSuma es quien en el ciclo for recolecta 
      las sumas de cada número de las mismas posiciones de arr1[i] y arr2[i]*/
      }
      newArr.push(totalSuma);/*cada suma de los elementos se agrega a newArr gracias a push */
    }
    return newArr; /* retornará la variable nerArr que contiene la suma de ambos 
    elementos de arr1 y arr2 */
  }

sumaArreglos(arr1,arr2);
