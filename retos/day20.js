function distributeGifts(weights) {
  const n = weights.length; // Número de filas en la matriz
  const m = weights[0].length; // Número de columnas en la matriz
  const gifts = []; // Arreglo para almacenar los regalos distribuidos

  // Itera a través de cada fila en la matriz
  for (let i = 0; i < n; ++i) {
    gifts[i] = []; // Crea un arreglo dentro del arreglo de regalos para cada fila
    // Itera a través de cada columna en la fila actual
    for (let j = 0; j < m; ++j) {
      // Obtiene los valores de los vecinos superior, izquierdo, derecho y inferior
      const up = weights[i - 1]?.[j];
      const left = weights[i][j - 1];
      const right = weights[i][j + 1];
      const down = weights[i + 1]?.[j];
      const current = weights[i][j]; // Valor actual en la posición [i][j]
      
      // Inicializa variables para calcular el promedio de los vecinos
      let sum = +(current != null) ? current : 0; // Inicializa la suma con el valor actual o 0 si es null
      let count = +(current != null); // Inicializa el contador con 1 si el valor actual no es null

      // Agrega los valores de los vecinos a la suma y aumenta el contador si los valores no son null
      sum += +(up != null) ? up : 0;
      count += +(up != null);
      sum += +(down != null) ? down : 0;
      count += +(down != null);
      sum += +(right != null) ? right : 0;
      count += +(right != null);
      sum += +(left != null) ? left : 0;
      count += +(left != null);

      // Calcula el promedio de los valores de los vecinos y el valor actual
      gifts[i][j] = Math.floor((sum / count) + 0.5); // Almacena el valor redondeado en el arreglo de regalos
    }
  }
  return gifts; // Devuelve la matriz con los regalos distribuidos
}

const input = [
  [4, 5, 1],
  [6, null, 3],
  [8, null, 4]
];

console.log(distributeGifts(input));
  
  // Resultado final
 /* [
    [5, 3, 3],
    [6, 5, 3],
    [7, 6, 4]
  ]*/