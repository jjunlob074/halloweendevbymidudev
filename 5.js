function escapePyramidHead(room) {
  const SIZE = room.length;
  let playerPos, queue = [];

  // Encontrar posiciones de 'T' y '▲'
  for (let r = 0; r < SIZE; r++) {
    for (let c = 0; c < SIZE; c++) {
      if (room[r][c] === "T") playerPos = [r, c];
      if (room[r][c] === "▲") {
        queue.push([r, c, 0]);
        room[r][c] = "#";
      }
    }
  }

  const DIRECTIONS = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  while (queue.length) {
    const [x, y, steps] = queue.shift();

    if (x === playerPos[0] && y === playerPos[1]) return steps;

    for (const [dx, dy] of DIRECTIONS) {
      const newX = x + dx;
      const newY = y + dy;
      if (
        newX >= 0 &&
        newX < SIZE &&
        newY >= 0 &&
        newY < SIZE &&
        room[newX][newY] !== "#"
      ) {
        room[newX][newY] = "#"; // Marcar como visitada
        queue.push([newX, newY, steps + 1]);
      }
    }
  }

  return -1; // No puede alcanzar a 'T'
}

// Ejemplos
const room1 = [
  [".", ".", "#", ".", "▲"],
  ["#", ".", "#", ".", "#"],
  [".", ".", ".", ".", "."],
  ["#", "#", "#", ".", "#"],
  ["T", ".", ".", ".", "."],
];

console.log(escapePyramidHead(room1)); // -> 8

const room2 = [
  ["T", ".", "#", "."],
  [".", ".", ".", "."],
  ["▲", ".", ".", "#"],
  [".", "#", "#", "#"],
];

console.log(escapePyramidHead(room2)); // -> 2

const room3 = [
  ["#", "#", "#"],
  ["▲", ".", "#"],
  [".", "#", "T"],
];

console.log(escapePyramidHead(room3)); // -> -1
