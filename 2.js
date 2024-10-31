function battleHorde(zombies, humans) {
    let finalDifference = 0;

    for (let i = 0; i < zombies.length; i++) {
        finalDifference += Number(zombies[i]) - Number(humans[i]);
    }

    if (finalDifference === 0) return 'x';
    return `${Math.abs(finalDifference)}${finalDifference > 0 ? 'z' : 'h'}`;
}

// Ejemplos de uso:
console.log(battleHorde('242', '334')); // -> "2h"
console.log(battleHorde('444', '282')); // -> "x"
