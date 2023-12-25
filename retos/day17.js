function optimizeIntervals(intervals) {
    if (intervals.length === 0) {
      return [];
    }
  
    // Ordenar los intervalos según el primer elemento
    intervals.sort((a, b) => a[0] - b[0]);
  
    const mergedIntervals = [intervals[0]];
  
    for (let i = 1; i < intervals.length; i++) {
      const currentInterval = intervals[i];
      const lastMergedInterval = mergedIntervals[mergedIntervals.length - 1];
  
      if (currentInterval[0] <= lastMergedInterval[1]) {
        // Si hay superposición, fusionar los intervalos
        lastMergedInterval[1] = Math.max(lastMergedInterval[1], currentInterval[1]);
      } else {
        // No hay superposición, agregar el intervalo fusionado
        mergedIntervals.push(currentInterval);
      }
    }
  
    return mergedIntervals;
}
  
console.log(optimizeIntervals([
    [5, 8],
    [2, 7],
    [3, 4]
])); // Debe imprimir: [[2, 8]]
  
console.log(optimizeIntervals([
  [1, 3],
  [8, 10],
  [2, 6]
])); // Debe imprimir: [[1, 6], [8, 10]]
  
console.log(optimizeIntervals([
    [3, 4],
    [1, 2],
    [5, 6]
])); // Debe imprimir: [[1, 2], [3, 4], [5, 6]]
  