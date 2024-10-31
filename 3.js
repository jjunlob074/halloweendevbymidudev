function findSafestPath(dream) {
    if (dream.length === 0 || dream[0].length === 0) {
        return 0; // Devuelve 0 si la matriz está vacía
    }

    const FILAS = dream.length;
    const COLUMNAS = dream[0].length;
    const dp = Array.from({ length: FILAS }, () => Array(COLUMNAS).fill(0));

    dp[0][0] = dream[0][0];

    for (let j = 1; j < COLUMNAS; j++) {
        dp[0][j] = dp[0][j - 1] + dream[0][j];
    }

    for (let i = 1; i < FILAS; i++) {
        dp[i][0] = dp[i - 1][0] + dream[i][0];

        for (let j = 1; j < COLUMNAS; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + dream[i][j];
        }
    }

    return dp[FILAS - 1][COLUMNAS - 1];
}

const dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
];

console.log(findSafestPath(dream)); // Devuelve 7
