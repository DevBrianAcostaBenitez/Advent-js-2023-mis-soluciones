function checkIsValidCopy(original, copy) {
    // Convertimos ambas cadenas a minúsculas para compararlas sin distinción de mayúsculas o minúsculas
    original = original.toLowerCase();
    copy = copy.toLowerCase();
  
    // Función para degradar un carácter según las reglas dadas
    function degradeChar(char) {
      const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz';
      const specialChars = '#+:.';
      
      if (lowercaseLetters.includes(char)) {
        // Si es una letra minúscula, degradar según el orden establecido
        const index = lowercaseLetters.indexOf(char);
        return specialChars[index % specialChars.length];
      } else if (specialChars.includes(char)) {
        // Si es un carácter especial, degradar al siguiente de la lista
        const index = specialChars.indexOf(char);
        return specialChars[(index + 1) % specialChars.length];
      } else {
        // Si no es una letra o carácter especial, devolver el mismo carácter
        return char;
      }
    }
  
    // Comparamos ambas cadenas después de degradar los caracteres de la copia
    for (let i = 0; i < original.length; i++) {
      const degradedChar = degradeChar(original[i]);
      if (degradedChar !== copy[i]) {
        return false; // Si encontramos algún carácter diferente, la copia no es válida
      }
    }
  
    return true; // Si todas las comparaciones coinciden, la copia es válida
}
  
console.log(checkIsValidCopy('Santa Claus is coming', 'sa#ta cl#us is comin#')); // true
console.log(checkIsValidCopy('Santa Claus is coming', 'p#nt: cla#s #s c+min#')); // false
console.log(checkIsValidCopy('Santa Claus', 's#+:. c:. s')); // true
console.log(checkIsValidCopy('Santa Claus', 's#+:.#c:. s')); // false
  