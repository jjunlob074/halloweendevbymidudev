function createMagicPotion(potions, target) {
  // Usa una tabla hash para almacenar los índices de los elementos,
  // evitando un doble bucle y reduciendo la complejidad a O(n).

  const potionToIndex = {};

  for (let index = 0; index < potions.length; index++) {
    const potion = potions[index];
    const complement = target - potion;

    if (complement in potionToIndex) {
      return [potionToIndex[complement], index];
    }

    potionToIndex[potion] = index;
  }

  return undefined;
}
