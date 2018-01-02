/*
Dado un arreglo y un número, retornar el índice (posición) del número. 
Ejemplo: 
arr = [1, 5, 8, 19]
number = 8
retorna 2
*/


function numbers(number){
  var arr = prompt("Ingresa varios números"); 
  /* La variable arr presenta un prompt para ingresar datos, en este caso varios numeros */
  var number = prompt("Ingresa el número que quieras retornar su posición");
  /* La variable number presenta un prompt para ingresar datos, en este caso la posición*/

  for(var i=0; i<= arr.length - 1; i++){ /* con el ciclo for, podremos itinerar 
  	por cada número desde la posición 0 además el indice debe ser menor al largo 
  	de la variable arr.length con -1 y con i++ permite itinerar al siguiente número*/
    if(arr[i] === number) { /* si el indice o posición del 
    	array es estrictamente igual al número ingresado 
    	en el prompt de la variable number, este retornará 
    	la posición de ese número*/
      return i;
  	}
  }
  return "Número inexistente, ingrese un válido"; /* Si no retornará "número inexistente, 
  ingrese un número válido"*/
}
console.log(numbers());

