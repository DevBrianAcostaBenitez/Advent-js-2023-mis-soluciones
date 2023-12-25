function getStaircasePaths(steps, maxJump) {
    const paths = [];
  
    function jump(currentPath) {
      const sum = currentPath.reduce((acc, val) => acc + val, 0);
  
      if (sum === steps) {
        paths.push(currentPath.slice()); // Agregar la secuencia actual a las posibles secuencias
      } else if (sum < steps) {
        for (let i = 1; i <= maxJump; i++) {
          if (sum + i <= steps) {
            currentPath.push(i); // Añadir el salto actual a la secuencia
            jump(currentPath); // Llamar recursivamente para el siguiente salto
            currentPath.pop(); // Retirar el último salto para probar con otro valor
          }
        }
      }
    }
  
    jump([]);
  
    return paths;
}
  
console.log(getStaircasePaths(2, 1)); // [[1, 1]]
console.log(getStaircasePaths(3, 3)); // [[1, 1, 1], [1, 2], [2, 1], [3]]
console.log(getStaircasePaths(5, 1));  // [[1, 1, 1, 1, 1]]
console.log(getStaircasePaths(5, 2)); 
  /*
[
  [1, 1, 1, 1, 1],
  [1, 1, 1, 2],
  [1, 1, 2, 1],
  [1, 2, 1, 1],
  [1, 2, 2],
  [2, 1, 1, 1],
  [2, 1, 2],
  [2, 2, 1],
]
*/
  