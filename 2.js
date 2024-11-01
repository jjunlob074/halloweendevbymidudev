function battleHorde(zombies, humans) {

    let winner = 0;

    for (let i = 0; i < zombies.length; i++) {
        winner += zombies[i] - humans[i];
    }

    return winner === 0 
    ? 'x' 
    : Math.abs(winner) + (winner > 0 ? 'z' : 'h');
}

// Ejemplos de uso:
console.log(battleHorde('242', '334')); // -> "2h"
console.log(battleHorde('444', '282')); // -> "x"
