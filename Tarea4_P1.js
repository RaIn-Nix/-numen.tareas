// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
  return array[0];
}

function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  return array[array.length - 1];
}

function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length;
}

function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  for (let index = 0; index < array.length; index++) {
    if (typeof array[index] === 'number') {
      array[index]++;
    } else {
      return "la matrix no es una matriz de enteros";
      break;
    }
  }
  return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  //array[array.length] = elemento;
  array.push(elemento);
  return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return array;
}

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  let aux = [];
  for (let index = 0; index < palabras.length; index++) {
    if (index != (palabras.length - 1)) {
      aux += (palabras[index] + " ");
    } else {
      aux += palabras[index];
    }
  }
  return aux;
}

function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  let arrayCont = 0;
  for (let index = 0; index < array.length; index++) {
    if (array[index] == elemento) {
      arrayCont++;
    }
  }
  return (arrayCont > 0);
}

function agregarNumeros(numeros) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  let suma = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (typeof (numeros[index]) == 'number') {
      suma += numeros[index];
    } else {
      return "matriz invalida";
      break;
    }
  }
  return suma;
}

function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  let index = 0
  while (index < resultadosTest.length) {
    if (typeof (resultadosTest[index]) == 'number') {
      suma += resultadosTest[index];
    } else {
      return "matriz invalida";
      break;
    }
    index++
  }
  return suma / index;
}

function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let numMasGrande = 0;
  for (let index = 0; index < numeros.length; index++) {
    if (typeof (numeros[index]) == 'number') {
      if (numeros[index] > numMasGrande) {
        numMasGrande = numeros[index];
      }
    } else {
      return "matriz invalida";
      break;
    }
  }
  return numMasGrande;
}

function cuentoElementos(arreglo) {
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 19.
  //Escribe tu código aquí:
  let cant = 0;
  for (let index = 0; index < arreglo.length; index++) {
    if (arreglo[index] > 19) {
      cant++;
    }
  }
  return cant;
}

function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí:
  if (numeroDeDia == 1 || numeroDeDia == 7) {
    return "Es fin de semana";
  } else if (numeroDeDia > 1 && numeroDeDia < 7) {
    return "Es dia Laboral"
  } else {
    return "Numero de dia incorrecto";
  }
}

function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num=String(n);
  return (num[0] == 9 );
}

function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí: 
  let index = 1;
  for(let aux=arreglo[0] ; index < arreglo.length && aux == arreglo[index]; index++);
  return (index == arreglo.length);
}


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  let NuevoArray=[];
  let ene=0, mar=0, nov=0;
  for (let index = 0, i=0; index < array.length; index++) {
    if (array[index] == "Enero") {
      NuevoArray[i] =array[index];
      ene++;
      i++;
    } else if(array[index] == "Marzo"){
      NuevoArray[i] =array[index];
      mar++;
      i++;
    }else if(array[index]=="Noviembre"){
      NuevoArray[i] =array[index];
      nov++;
      i++;
    }
    
  }
  if (!(ene>0 && mar>0 && nov>0)) {
    return "No se encontraron los meses pedidos";
  }else{
    return NuevoArray;
  }
}

function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let NuevoArray = [];
  for (let index = 0, i=0; index < array.length; index++) {
    if ( typeof(array[index]) == 'number' ){
      if(array[index] > 100){
        NuevoArray[i] = array[index];
        i++;
      }
    }else{
      return "No es un array de enteros.";
      break;
    } 
  }
  return NuevoArray;
}

// No modificar nada debajo de esta línea, de lo contrario no correrán los test.
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
};
