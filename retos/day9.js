function adjustLights(lights) {
    let changesRedFirst = 0; // Contador si la secuencia comienza con rojo

    for (let i = 0; i < lights.length; i++) {
        const shouldBeRed = i % 2 === 0; // Si la luz debería ser roja en esta posición

        if ((shouldBeRed && lights[i] !== '🔴') ||
         (!shouldBeRed && lights[i] !== '🟢')) {
            changesRedFirst++;
        }
    }

    // El mínimo de cambios necesarios será entre comenzar con rojo o con verde
    return Math.min(changesRedFirst, lights.length - changesRedFirst);
}


console.log(adjustLights(['🟢', '🔴', '🟢', '🟢', '🟢'])); // Salida esperada: 1
console.log(adjustLights(['🔴', '🔴', '🟢', '🟢', '🔴'])); // Salida esperada: 2
console.log(adjustLights(['🟢', '🔴', '🟢', '🔴', '🟢'])); // Salida esperada: 0
console.log(adjustLights(['🔴', '🔴', '🔴']));          // Salida esperada: 1
