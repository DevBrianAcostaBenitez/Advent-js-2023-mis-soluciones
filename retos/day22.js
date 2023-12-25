function compile(code) {
    // Inicialización de variables
    let ans = 0; // Variable para almacenar el resultado de las operaciones
    let index = 0; // Índice para recorrer las instrucciones en la cadena de código
    let last = -1; // Variable para guardar la posición del último punto de retorno ('%')
    let inside = null; // Variable para indicar si estamos dentro de un bloque condicional
    const instructions = code.split(''); // Divide la cadena de código en una matriz de caracteres individuales
  
    // Bucle que recorre las instrucciones del código
    while (index < instructions.length) {
      const outside = inside !== false; // Variable para verificar si estamos fuera de un bloque condicional
      const instruction = instructions[index]; // Obtiene la instrucción en la posición actual
  
      // Lógica para las operaciones según las instrucciones del lenguaje
      ans += +(outside) * +(instruction === '+'); // Incrementa ans si estamos fuera y la instrucción es '+'
      ans -= 1 * +(outside) * +(instruction === '-'); // Decrementa ans si estamos fuera y la instrucción es '-'
      ans *= [1, 2][+(outside) * +(instruction === '*')]; // Multiplica ans si estamos fuera y la instrucción es '*'
  
      // Manejo de las instrucciones '%', '<' y lógica de los bloques condicionales '¿' y '?'
      if (instruction === '%') {
        last = [last, index][+(inside === null || inside)]; // Actualiza la posición del último punto de retorno
      } else if (instruction === '<') {
        instructions[index] = ' '; // Reemplaza '<' por un espacio en la cadena de instrucciones
        index = [last - 1, index - 1][+(last === -1)]; // Regresa a la posición del último punto de retorno
      }
  
      const a = +(instruction === '¿'); // Verifica si la instrucción es '¿'
      const b = +(ans > 0); // Verifica si ans es mayor que 0
      const c = +(instruction === '?'); // Verifica si la instrucción es '?'
  
      // Lógica para controlar los bloques condicionales '¿' y '?'
      inside = [inside, null, true, false][
        2 * a + c + (1 - b) * (1 - c) * (a + b)
      ]; // Actualiza el estado del bloque condicional
  
      index++; // Incrementa el índice para pasar a la siguiente instrucción
    }
  
    return ans; // Devuelve el resultado de las operaciones
}
  
console.log(compile('++*-')); // 3
console.log(compile('++%++<')); // 6
console.log(compile('++<--')); // 0
console.log(compile('++¿+?')); // 3
console.log(compile('--¿+++?')); // -2
