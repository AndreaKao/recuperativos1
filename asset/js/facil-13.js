/*
Dado dos string (palabra1 y palabra2) escribir
una función para determinar si palabra1
es anagrama de palabra2.
Si es anagrama debe retornar true, en caso
contrario false.
Una palabra es anagrama de otra cuando
contiene las mismas letras en un orden distinto.
Ejemplo:
la palabra anagrama es un anagrama de la palabra anmgraaa
*/

function esAnagrama(palabra1, palabra2) {

   var palabra1 = prompt("Ingresa una palabra"); /* con prompt podemos ingresar 
   el dato que se pide, en este caso sería el de la primera palabra*/
   var palabra2 = prompt("Ingresa otra palabra"); /* con prompt podemos ingresar 
   el dato que se pide, en este caso sería el de la segunda palabra*/

   var word1 = palabra1.split("").sort(); /* la variable word1 toma la palabra y 
   con el metodo split la vuelve array y con sort lo ordenan 
   por abecesario para poder iterar y comparar */
   var word2 = palabra2.split("").sort(); /* la variable word2 toma la palabra y 
   con el metodo split la vuelve array y con sort lo ordenan 
   por abecesario para poder iterar y comparar */


   for (var i = 0; i < word1.length; i++) { /* itera con for, porque la variable 
   	indice comienza de la posicion 0, indice debe ser menor al largo de word1
   	 y con i++ permite avanzar en cada letra*/ 
     var ana1 = word1[i]; /* La variable ana guarda la letra que hay en 
     cada indice del array de word1 */
   }

    for (var j = 0; j < word2.length; j++) { /* itera con for, porque la variable 
   	indice J comienza de la posicion 0, indice J debe ser menor al largo de word2
   	 y con j++ permite avanzar en cada letra*/ 
     var ana2 = word2[j]; /* La variable ana guarda la letra que hay en 
     cada indice J del array de word2 */
   }

    if (word1.length === word2.length && ana1 === ana2) { /* las palabras guardadas 
    	en word1.length y word2.length deben ser estictamente iguales en tamaño en cuanto al largo 
    	y además cada indice (por ende letras) debe ser estrictamente igual para que sean true en la alerta 
    	y en caso contrario a que no se cumpla ninguna ninguna de esas dos condiciones es falso*/
     alert("true")
     } else{
      alert("false")
     }
}
