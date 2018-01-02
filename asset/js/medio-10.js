/*
Un grupos de amigos van a un evento y s
us nombres están dentro de un arreglo.
Escribir una función donde dado el nombre
de la persona puedas retornar el asiento que le toca.
La numeración comienza en 1, si la
persona no tiene asiento retornar 0.
Ejemplo:
lista = [“Allison”, “Belén”, “Nadia”, “Marcia”, “Ale”, “Fabián”]
nombre = “Nadia”
retorna 3
*/

function puestoPersonas (nombre){
  var nombre = prompt("Ingresa el nombre");
  var lista = ["Allison", "Belén", "Nadia", "Marcia", "Ale", "Fabián"]
  for(var i = 0; i < lista.length; i++){ /* variable i indica desde 
  	qué indice debe empezar, luego el indice debe ser menor al largo de la lista 
  	y el i++ permite seguir iterando al siguiente indice(en este caso nombre o asiento)*/
    if(lista[i] === nombre) { /* si el indice o puesto de la lista que hemos indicado 
    	es estrictamente igual al nombre que ya está establecido retornará 
    	el número del puesto que le pertenece*/
      return i+1; /* retornará a partir del puesto 1 no del 0*/
  	}
  }
  return 0; /* si no está dentro de dentro de la lista de asiento retornará 0 */
}
console.log(puestoPersonas());
