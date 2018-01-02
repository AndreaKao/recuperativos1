/*
Realizar un programa que permita analizar si una palabra
que el usuario introduce por teclado es palíndroma o no.
Si es palíndroma debe retornar true, en caso contrario false.
Palíndroma: palabra que se lee igual de adelante
hacia atrás como de atrás hacia adelante. Ejemplo: Amalama
*/

    /* Fuera de la función se genera un promt pidiendo que el usuario
    escriba la frase o la palabra que queremos comparar por orden*/
    var frase = prompt("Escribe Una Frase o Palabra Palindroma");
 
    function palindromo(frase){
      frase=frase.toLowerCase().replace(/\s/g,"");
      /*La variable frase que contiene a la palabra o frase
      ingresada por el uduario las letras pasan a ser todas minúsculas
      porque así las mayúsculas no nos hagan problemas para que
      reconosca las letras y también se quitan los espacios con replace*/

      fraseReverse=frase.split("").reverse().toString();
      /*fraseReverse permite tomar la palabra o frase ingresada tomarla
      y con split se convierte en array cada letra para separarlas y así
      con recerse podemos dar vuelta cada array y con tostring pasamos
      cada letra en un string*/

      for (var i = 0; i < ((fraseReverse.length)-1); i++) {
      	/* con el ciclo for, podremos itinerar por cada letra desde la posición 0
      	además el indice debe ser menor al largo de fraseReverse con -1 
      	debido a que tiene una coma menos que el número total de las letras*/
        fraseReverse=fraseReverse.replace(",","");
        /* Con replace nos permite quitar las comas luego de pasar a string
        la frase o palabra */
      };
      
      if(frase==fraseReverse){
      	/*Nos permite comparar ambos orden de palabras
      	entonces si ambas son iguales a pesar de estar
      	en distinto orden, el resultado quiere
      	decir que es palindromo*/
        
        alert("Es Palindromo");
      }
      else{
        /* En caso contrario, si ambos orden de la misma
        palabra o frase no coincide, aparecerá un alert
        diciendo que no es palindromo*/
        alert("No es Palindromo");
      }
    }
    /* Se llama a la función*/
    palindromo(frase);