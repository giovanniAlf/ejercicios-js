// 1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o
// menor de edad, el programa debe validar que solo se puedan ingresar números positivos. 

export let edad;

      edad = parseInt(prompt('Ingrese su edad:'));


      if(edad >= 18){
        alert("es mayor de edad");

      }
      else if(edad <= 0){
        alert("no es una edad valida")
      }

      else{
        alert("es menor de edad");
        
      }

