function organizeChristmasDinner(dishes) {
    // Creamos un mapa para almacenar los ingredientes como clave y los platos que los contienen como valor
    const ingredientMap = new Map();
  
    // Iteramos sobre cada plato en la lista de platos
    for (const dish of dishes) {
      // Obtenemos el nombre del plato
      const dishName = dish[0];
      // Obtenemos los ingredientes del plato
      const ingredients = dish.slice(1);
  
      // Iteramos sobre cada ingrediente del plato
      for (const ingredient of ingredients) {
        // Verificamos si el ingrediente ya está en el mapa
        if (ingredientMap.has(ingredient)) {
          // Si el ingrediente ya existe, obtenemos los platos asociados y agregamos el plato actual
          const existingDishes = ingredientMap.get(ingredient);
          existingDishes.push(dishName);
          ingredientMap.set(ingredient, existingDishes);
        } else {
          // Si es un nuevo ingrediente, lo agregamos al mapa con el plato actual
          ingredientMap.set(ingredient, [dishName]);
        }
      }
    }
  
    // Filtramos los ingredientes que están presentes en al menos 2 platos
    const sharedIngredients = Array.from(ingredientMap.entries()).filter(
      ([ingredient, dishes]) => dishes.length >= 2
    );
  
    // Ordenamos alfabéticamente los ingredientes compartidos
    const sortedIngredients = sharedIngredients.sort(([ingredientA], [ingredientB]) =>
      ingredientA.localeCompare(ingredientB)
    );
  
    // Mapeamos los ingredientes compartidos y sus platos asociados
    const result = sortedIngredients.map(([ingredient, dishes]) => {
      // Ordenamos alfabéticamente los nombres de los platos
      const sortedDishes = dishes.sort((a, b) => a.localeCompare(b));
      return [ingredient, ...sortedDishes]; // Devolvemos el nombre del ingrediente y los platos ordenados
    });
  
    return result; // Devolvemos el resultado final
}
  
const dishes = [
    ["christmas turkey", "turkey", "sauce", "herbs"],
    ["cake", "flour", "sugar", "egg"],
    ["hot chocolate", "chocolate", "milk", "sugar"],
    ["pizza", "sauce", "tomato", "cheese", "ham"],
];
  
console.log(organizeChristmasDinner(dishes));
  