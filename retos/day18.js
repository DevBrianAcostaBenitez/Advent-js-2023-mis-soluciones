function drawClock(time) {
  // Objeto que contiene la representación de cada dígito en el reloj digital
  const digitGrid = {
    '00': '1', '01': '14', '02': 'A',  10: '1237',
    11: 'N', 12: '56', 20: '1237', 21: 'N',
    22: '56', 30: '17',  31: '170', 32: 'A',
    40: '134579', 41: 'N', 42: '2', 50: '134579', 
    51: 'N', 52: '2', 60: '147', 61: '147', 62: 'A'
  };

  // Matriz que representará la pantalla del reloj con espacios en blanco inicialmente
  const clockGrid = Array.from({ length: 7 }, () => new Array(17).fill(' '));

  // Colocar los dos puntos en la posición designada en la pantalla del reloj
  clockGrid[2][8] = '*'; // Dos puntos en la fila 2, columna 8
  clockGrid[4][8] = '*'; // Dos puntos en la fila 4, columna 8

  // Obtener cada dígito de la hora y dividirlos en una matriz
  const digits = [...time.replace(':', '')];
  let currentDigit = digits.shift(); // Obtener el primer dígito

  // Iterar sobre las posiciones donde deben colocarse los dígitos en la pantalla del reloj
  for (const index of [0, 4, 10, 14]) {
    // Iterar sobre las filas y columnas de cada dígito
    for (let row = 0; row < 7; ++row) {
      for (let col = 0; col < 3; ++col) {
        // Obtener el patrón de asteriscos para el dígito actual
        const notFill = digitGrid[`${row}${col}`];

        // Si es 'N' (para indicar que no se debe rellenar en esa posición), continúa con la siguiente iteración
        if (notFill === 'N') continue;

        // Si no se encuentra el dígito actual en la posición actual del dígito o es 'A' (cuyo caso es asterisco), rellena con '*'
        if (!notFill.includes(currentDigit) || notFill === 'A') {
          clockGrid[row][col + index] = '*';
        }
      }
    }
    currentDigit = digits.shift(); // Obtener el siguiente dígito
  }

  return clockGrid; // Devuelve la representación de la pantalla del reloj
}

console.log(drawClock('01:30'))