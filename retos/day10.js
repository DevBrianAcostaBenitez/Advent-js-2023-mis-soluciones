function createChristmasTree(ornaments, height) {
  let response = "";
  const width = (height * 2) - 1
  ornaments = [...ornaments.repeat(60)]
  for (const h of Array.from({ length: height }).keys()) {
    const layerWidth = (h * 2) + 1
    response += " ".repeat(
      (width - layerWidth) / 2
    )
      + ornaments.splice(0, h + 1).join(" ")
      + "\n"
  }
  response += " ".repeat(width / 2) + "|" + "\n"
  return response
}

const arbol1 = crearArbol("123", 4);
console.log(arbol1);
  
const arbol2 = crearArbol("*@o", 3);
console.log(arbol2);
  