function maxGifts(houses) {
    const n = houses.length;
  
    if (n === 0) return 0;
    if (n === 1) return houses[0];
  
    // Crear un arreglo para almacenar la máxima cantidad de regalos que se pueden entregar hasta cada casa
    const maxGiftsUntil = new Array(n).fill(0);
  
    // Caso base: La primera casa
    maxGiftsUntil[0] = houses[0];
    // Si solo hay dos casas, se toma la casa con más regalos
    maxGiftsUntil[1] = Math.max(houses[0], houses[1]);
  
    for (let i = 2; i < n; i++) {
      // La cantidad máxima de regalos entregados hasta la casa i:
      // máximo entre la cantidad de regalos en la casa actual + la cantidad máxima hasta dos casas antes
      // o la cantidad máxima hasta la casa anterior
      maxGiftsUntil[i] = Math.max(houses[i] + maxGiftsUntil[i - 2], maxGiftsUntil[i - 1]);
    }
  
    // La máxima cantidad de regalos que se pueden entregar en la última casa
    return maxGiftsUntil[n - 1];
  }
  
console.log(maxGifts([2, 4, 2])); // 4 (4)
console.log(maxGifts([5, 1, 1, 5])); // 10 (5 + 5)
console.log(maxGifts([4, 1, 1, 4, 2, 1])); // 9 (4 + 4 + 1)
console.log(maxGifts([1, 3, 1, 3, 100])); // 103 (3 + 100)
  