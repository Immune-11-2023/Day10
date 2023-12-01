// BUCLES, BUCLES ANIDADOS E INTRODUCCIÓN A EFICIENCIA: no todas las soluciones fueron creadas iguales...

// 1) Problema de Gauss: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
// 🔥
// 🔥🔥🔥

// 1 ... 100 => 5050
function summation(num) {
  let sum = 0
  for (let i = 1; i <= num; i++) {
    sum += i // Si queremos sumar valores para reasignar un nuevo valor a "sum" nos servimos del operador +=
  }
  return sum
}
// Según cuenta la leyenda, Gauss resolvió este problema en menos de 1 minuto. La pregunta es: ¿Cómo?
// Si nos damos cuenta, podemos agrupar los numeros del rango 1-100 por parejas de la siguiente manera:
// (1 -- 100) , (2 -- 99), (3 -- 98), (4--97) , etc. Si nos fijamos, cada pareja suma el mismo valor: 101. ¿Cuántas parejas podremos formar en total? En este caso 50 (ya que son 100 números => 100/2)
// Expresado en términos más formales => Podemos formar n/2 (100/2 en el ejemplo) parejas, donde n es el número cuyo sumatorio queremos hallar.
// Por otra parte, cada pareja de números suma 101. Casualmente, ¿no es esto igual a n + 1 (100 + 1 en nuestro ejemplo)?
// Luego tenemos, por una parte, el número de parejas n/2 y, por otra parte, la suma de cada una de esas parejas (n+1)
// Dicho en humano, si tenemos 50 parejas posibles y cada una suma 101, solo nos queda multiplicar => 50 * 101, que tiene como resultado 5050
// Expresado formalmente: n/2*(n+1):

// Podéis comprobar que funciona en codewars: https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
function summation(num) {
  return (num / 2) * (num + 1) // Esta solución es MUCHO más eficiente que la anterior porque no tenemos que recorrer ningún array
}

// 2) Matrices => a veces no queda más remedio que iterar
// find the biggest number 🔥🔥/2
const matrix = [
  [0, 255, 1], // 0
  [4, 5, 666], // 1
  [28, 98, 9], // 2
]

// Vamos a desmenuzar este problema en partes!!!:
// En primre lugar, observamos que esta "matriz" no es más que un array de arrays...
// Se nos pide que saquemos el número más grande de la matriz. En principio sabemos resolver ese problema para un array simple como: [0, 255, 1]
// Sin embargo, en este caso nos enfrentamos a una estructura un poco más compleja. Pero nuestra estragia es bien simple: si sabemos obtener el número más grande una lista simple: [0,255,1],
// ¿Acaso no podemos separar esta matriz en subproblemas?: Divide and Conquer!!! (Divide y vencerás)

function findTheBiggestNumber(matrix) {
  let biggestNumber = 0 // Creamos una variable para poder guardar en memoria el dato del número más grande.
  for (let i = 0; i < matrix.length; i++) {
    // Creamos un bucle normal y corriente. Cada índice i nos va a permitir acceder a un elemento de la matriz:  [0, 255, 1], [4, 5, 666], [28, 98, 9]
    const element = matrix[i] // matrix[i] en cada vuelta del bucle va a ser igual a cada array de números: [0,255,1], [4, 5, 666] y finalmente [28, 98, 9]
    // ¡Estamos a punto de resolver el problema! Si os fijáis, element es en cada caso una lista de números: ¡Este problema ya sabemos resolverlo!
    for (let j = 0; j < element.length; j++) {
      // Iteramos sobre cada uno de los elementos de esta lista y comparamos: Primer elemento (índices i: 0, j: 0) => 0, ¿Es mayor que el valor de nuestra variable inicial? (0) Nope.
      // Este bucle es una estructura ANIDADA dentro del bucle externo, luego por cada vuelta que dé el primero, este se ejecuta 3 veces.
      if (element[j] > biggestNumber) biggestNumber = element[j]
    }
  }
  // Cuando terminamos el bucle externo, ya hemos recorrido todos los números de la matriz y biggestNumber será el número más grande que hayamos analizado.
  return biggestNumber
}

// 3) How many tiiiiiimes:
// 🔥🔥
const brands = [
  "Uniqlo",
  "Bershka",
  "Bershka",
  "Zara",
  "H&M",
  "Guchi",
  "Naike",
  "Bershka",
]

function getBrandRepeatedTimes(brands, singleBrand) {}

// 4 EFICIENCIA... ==> checkfortarget...
//🔥🔥🔥
function checkForTarget(numbers, target) {}

// 5 CAN U GUESS MY NUMBER? BINARY SEARCH
// 🔥
// 🥸🥸🥸

// Ejemplo => [3, 7, 12, 16, 20, 24, 28, 33, 37, 41, 45, 50, 55, 60, 65] , 55 // boolean => true, false

// Dado un array de números y un número "target", tenemos que devolver si target está incluido en nuestra lista de números
function guessNumber(numbers, target) {
  // EL enfoque más intuitivo es iterar sobre nuestro array y comprobar si a cada paso, al iterar sobre nuestro array, el elemento que estemos analizando es target.
  for (let i = 0; i < numbers.length; i++) {
    // Vamos comparando: 3 === 55 ??? Nope , 7 === 55 ??? Nope... Hasta llegar a 55 === 55.
    if (numbers[i] === target) return true
  }
  return false
}

// SOLUCIÓN AVANZADA (SUPER CHULA 🔥🔥🔥🔥🔥).
// LEED esto SOLO si comprendéis el 100% de lo que hemos visto. 🥸
// ESTO ES CURIOSIDAD MALSANA (se me calienta el hocico y tengo que explicarlo al menos). Esta técnica se utiliza a nivel de entrevistas técnicas de empresas FAANG (Facebook,Amazon, Apple, Netflix, Google)

// Si os dais cuenta, nuestra lista de números está ordenada de menor a mayor.
// En la vida, real, si jugásemos a este juego, para adivinar el número en el que está pensando alguien, no contaríamos del 1 al 100...
// Pensad qué pasaría si nuestro juego fuera del 1 al 1.000.000.000.000 ... Nos pasaríamos la vida contando.
// En estos casos pensamos en un enfoque más eficiente. En el caso de este problema, dicho enfoque se conoce como "Binary Search" o Búsqueda Binaria en el mundo de Algoritmia.

function guessNumber(numbers, target) {
  // La idea de este enfoque es reducir nuestra muestra a la mitad a cada iteración.
  // En el caso del rango 1... 100, empezaríamos partiendo del 50 y haciendo la pregunta: ¿Es el número que estás pensando mayor o menor que 50?
  let left = 0
  let right = numbers.length - 1
  // Creamos dos punteros, el puntero izquierdo apunta al primer índice, y el segundo al último...
  // De esta forma, podemos siempre apuntar a la mitad => El índice intermedio entre left y right...

  while (left <= right) {
    const mid = Math.floor((left + right) / 2) // Ejemplo: inicialmente left en nuestro ejemplo es 0, right es 14, mid es 7 => que apunta al elemento intermedio: 33

    if (numbers[mid] === target) {
      return true
    } // Igual que en nuestro juego, nos preguntamos si el número de en medio en nuestro rango es el objetivo. Si lo es, entonces hemos adivinado el número y el juego se detiene
    else if (numbers[mid] > target) right = mid - 1
    // Si el número a adivinar es menor, entonces reducimos el rango a la mitad izquierda...
    // Sabiendo esto, podemos reducir el rango de números a la mitad...
    // Ejemplo con el juego del 1 al 100 => Estoy pensando en el número 25. Empiezo por la mitad, el 50.
    // Como 25 es menor a 50, tengo que quedarme con la muestra => [1, ... 49]
    else {
      left = mid + 1 // Si nuestro objetivo fuera mayor, tendríamos que quedarnos con la muestra de la derecha: [51, .... 100]
    }
  }
  return false // Finalmente, si el número no se encuentra en el rango definido retornamos false...
}

// Podéis comprobar la solución aquí: https://leetcode.com/problems/binary-search/submissions/
// En este caso particular nos preguntar por los índices así que la solución sería esta:

var search = function (nums, target) {
  // En leetcode utilizand "var" para declarar funciones... Sin más, igual que si hiciéramos function search() {}
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (nums[mid] === target) return mid
    else if (nums[mid] > target) right = mid - 1
    else left = mid + 1
  }
  return -1
}
