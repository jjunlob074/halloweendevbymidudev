function escapePyramidHead(room) {
    const SIZE = room.length;
    let playerPos, pyramidPos;

    // Encontrar las posiciones de 'T' y '▲'
    for (let r = 0; r < SIZE; r++) {
        for (let c = 0; c < SIZE; c++) {
            if (room[r][c] === 'T') playerPos = [r, c];
            if (room[r][c] === '▲') pyramidPos = [r, c];
        }
    }

    const DIRECTIONS = [
        [-1, 0], // Arriba
        [1, 0],  // Abajo
        [0, -1], // Izquierda
        [0, 1],  // Derecha
    ];
    
    const queue = [pyramidPos.concat(0)]; // [x, y, pasos]
    
    // Marcar la posición de Pyramid Head como visitada
    room[pyramidPos[0]][pyramidPos[1]] = '#';

    while (queue.length) {
        const [x, y, steps] = queue.shift();
        
        // Si alcanza al jugador, devolver pasos
        if (x === playerPos[0] && y === playerPos[1]) {
            return steps;
        }

        // Explorar direcciones
        for (const [dx, dy] of DIRECTIONS) {
            const newX = x + dx;
            const newY = y + dy;

            if (
                newX >= 0 && newX < SIZE && 
                newY >= 0 && newY < SIZE && 
                room[newX][newY] !== '#'
            ) {
                room[newX][newY] = '#'; // Marcar como visitada
                queue.push([newX, newY, steps + 1]);
            }
        }
    }

    return -1; // Si no puede alcanzar a 'T'
}
