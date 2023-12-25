function autonomousDrive(store, movements) {
    // Encontrar la posición inicial del robot
    let pos = [-1, -1];
    for (let i = 0; i < store.length; i++) {
      const idx = store[i].indexOf('!');
      if (idx !== -1) {
        pos = [i, idx];
        break;
      }
    }
    
    // Función para verificar si una posición está dentro de los límites del almacén
    const isValid = (x, y) => x >= 0 && x < store.length && y >= 0 && y < store[0].length;
    
    // Definir los movimientos posibles
    const dirs = { R: [0, 1], L: [0, -1], U: [-1, 0], D: [1, 0] };
  
    // Iterar a través de los movimientos y actualizar la posición del robot
    for (let i = 0; i < movements.length; i++) {
      const move = movements[i];
      const dir = dirs[move];
      const newX = pos[0] + dir[0];
      const newY = pos[1] + dir[1];
  
      // Verificar si el movimiento es válido y no encuentra un obstáculo
      if (isValid(newX, newY) && store[newX][newY] !== '*') {
        // Actualizar la posición del robot en el almacén
        store[pos[0]] = store[pos[0]].substring(0, pos[1]) + '.' + store[pos[0]].substring(pos[1] + 1);
        pos = [newX, newY];
        store[pos[0]] = store[pos[0]].substring(0, pos[1]) + '!' + store[pos[0]].substring(pos[1] + 1);
      }
    }
  
    return store;
}
  
const store = ['..!....', '...*.*.'];
const movements = ['R', 'R', 'D', 'L'];
const result = autonomousDrive(store, movements);
  