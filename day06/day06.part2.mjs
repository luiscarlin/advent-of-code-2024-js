import { log } from 'node:console';
import fs from 'node:fs';

const grid = fs
  .readFileSync('./day06/file.in', 'utf8')
  .trim()
  .split('\n')
  .map((row) => row.split(''));
const rows = grid.length;
const cols = grid[0].length;

// up, right, down, left
const directions = [
  [-1, 0],
  [0, 1],
  [1, 0],
  [0, -1],
];

let startRow, startCol, startDir;
for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if ('^>v<'.includes(grid[r][c])) {
      startRow = r;
      startCol = c;
      startDir = '^>v<'.indexOf(grid[r][c]); // Map direction symbol to index
      break;
    }
  }
}

const isLoopDetected = () => {
  let guardRow = startRow,
    guardCol = startCol,
    guardDir = startDir;

  const visited = new Set();
  visited.add(`${guardRow},${guardCol},${guardDir}`);

  while (true) {
    const [dr, dc] = directions[guardDir];
    const nextRow = guardRow + dr;
    const nextCol = guardCol + dc;

    if (grid[nextRow]?.[nextCol] === undefined) {
      return false;
    }

    const nextCell = grid[nextRow][nextCol];

    if (nextCell === '#') {
      // Obstacle ahead, turn right
      guardDir = (guardDir + 1) % 4;
    } else {
      // Move forward
      guardRow = nextRow;
      guardCol = nextCol;
    }

    const state = `${guardRow},${guardCol},${guardDir}`;
    if (visited.has(state)) {
      return true;
    }
    visited.add(state);
  }
};

let validPositions = 0;

for (let r = 0; r < rows; r++) {
  for (let c = 0; c < cols; c++) {
    if (grid[r][c] === '#' || (r === startRow && c === startCol)) {
      continue;
    }

    const originalValue = grid[r][c];
    grid[r][c] = '#';

    if (isLoopDetected()) {
      validPositions++;
    }

    grid[r][c] = originalValue;
  }
}

log('part 2', validPositions);
