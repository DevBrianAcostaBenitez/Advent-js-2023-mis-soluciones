function revealSabotage(store) {
  // Obtiene las dimensiones de la matriz de entrada
  const n = store.length; // Número de filas
  const m = store[0].length; // Número de columnas
  const st = store; // Almacena la matriz de entrada en 'st'

  // Itera a través de cada celda de la matriz
  for (let i = 0; i < n; ++i) {
    for (let j = 0; j < m; ++j) {
      const ij = st[i][j]; // Valor actual de la celda

      // Calcula la cantidad de '*' alrededor de la celda actual
      const w = +(st[i - 1]?.[j - 1] === '*') + +(st[i - 1]?.[j] === '*'); // Diagonal superior izquierda, superior
      const y = +(st[i - 1]?.[j + 1] === '*') + +(st[i]?.[j - 1] === '*'); // Diagonal superior derecha, izquierda
      const t = +(st[i]?.[j + 1] === '*') + +(st[i + 1]?.[j - 1] === '*'); // Derecha, diagonal inferior izquierda
      const k = +(st[i + 1]?.[j] === '*') + +(st[i + 1]?.[j + 1] === '*'); // Abajo, diagonal inferior derecha

      // Calcula la suma total de '*' alrededor de la celda actual
      const x = `${w + y + t + k}`;

      // Actualiza el valor de la celda según ciertas condiciones
      st[i][j] = [ij, x][+(w + y + t + k > 0) * +(ij === ' ')];
      // Si la suma total de '*' alrededor de la celda es mayor a cero y el valor actual es un espacio ' ',
      // el nuevo valor de la celda es la suma total de '*' alrededor. De lo contrario, permanece igual al valor actual.
    }
  }
  // Devuelve la matriz actualizada
  return store;
}

// Matriz de ejemplo que representa el tablero de sabotaje
const store = [
  ['*', ' ', ' ', ' '],
  [' ', ' ', '*', ' '],
  [' ', ' ', ' ', ' '],
  ['*', ' ', ' ', ' ']
];

console.log(revealSabotage(store));
/* Debería mostrar:
  [
    ['*', '2', '1', '1'],
    ['1', '2', '*', '1'],
    ['1', '2', '1', '1'],
    ['*', '1', ' ', ' ']
  ]
*/
