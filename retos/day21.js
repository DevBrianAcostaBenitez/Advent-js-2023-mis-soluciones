function findBalancedSegment(message) {
    const zeros = [0]; // Arreglo para almacenar la cantidad acumulada de 0s hasta la posición i
    const ones = [0]; // Arreglo para almacenar la cantidad acumulada de 1s hasta la posición i
    
    // Itera a través de cada bit en el mensaje
    for (const bit of message) {
      // Calcula la cantidad acumulada de 0s y 1s hasta el bit actual y los almacena en los arreglos zeros y ones
      zeros.push(zeros.slice(-1)[0] + +(bit === 0)); // Si el bit es 0, agrega 1 al conteo de 0s acumulados, de lo contrario, suma 0
      ones.push(ones.slice(-1)[0] + +(bit === 1)); // Si el bit es 1, agrega 1 al conteo de 1s acumulados, de lo contrario, suma 0
    }
    
    const ans = []; // Arreglo para almacenar la respuesta final
    let max = 0; // Variable para almacenar la longitud máxima del segmento equilibrado
    
    // Itera a través de las combinaciones posibles de índices i y j
    for (let i = 0; i < ones.length; i++) {
      for (let j = i + 1; j < ones.length; j++) {
        // Verifica si el segmento entre i y j (ambos inclusive) es equilibrado
        if (ones[j] - ones[i] === zeros[j] - zeros[i]) {
          // Si el segmento es equilibrado, verifica si su longitud es mayor que el máximo actual
          if (ones[j] - ones[i] > max) {
            ans[0] = i; // Actualiza el índice de inicio del segmento equilibrado
            ans[1] = j - 1; // Actualiza el índice final del segmento equilibrado
            max = ones[j] - ones[i]; // Actualiza la longitud máxima del segmento equilibrado
          }
        }
      }
    }
    
    return ans; // Devuelve el índice de inicio y fin del segmento más largo y equilibrado
}

console.log(findBalancedSegment([1, 1, 0, 1, 1, 0, 1, 1]))
//                         |________|
// posición del segmento:    [2, 5]
// más largo equilibrado
// de 0s y 1s

console.log(findBalancedSegment([1, 1, 0]))
//                      |__|
//                     [1, 2]

console.log(findBalancedSegment([1, 1, 1]))
// no hay segmentos equilibrados: []