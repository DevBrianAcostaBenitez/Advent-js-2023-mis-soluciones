function travelDistance(map) {
    // Convertir el mapa en un array de filas
    const rows = map.trim().split('\n');
  
    // Encontrar la posición inicial de Santa ('S')
    let santaPosition = { x: -1, y: -1 };
    for (let i = 0; i < rows.length; i++) {
      const columnIndex = rows[i].indexOf('S');
      if (columnIndex !== -1) {
        santaPosition = { x: columnIndex, y: i };
        break;
      }
    }
  
    // Función para encontrar la posición de un niño dado su número
    function findChildPosition(childNumber) {
      for (let i = 0; i < rows.length; i++) {
        const columnIndex = rows[i].indexOf(childNumber.toString());
        if (columnIndex !== -1) {
          return { x: columnIndex, y: i };
        }
      }
      return null;
    }
  
    let totalDistance = 0;
    for (let childNumber = 1; childNumber <= 9; childNumber++) {
      const childPosition = findChildPosition(childNumber);
      if (childPosition) {
        // Calcular la distancia entre Santa y el niño actual
        totalDistance += Math.abs(santaPosition.x - childPosition.x) + Math.abs(santaPosition.y - childPosition.y);
        // Actualizar la posición de Santa para el siguiente niño
        santaPosition = childPosition;
      }
    }
  
    return totalDistance;
}
  
const map = `.....1....
  ..S.......
  ..........
  ....3.....
  ......2...`;
  
const result = travelDistance(map);
  console.log(result); // -> 12 km
  
const result2 = travelDistance(`..S.1...`);
  console.log(result2); // -> 2
  