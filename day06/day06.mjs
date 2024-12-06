import { log } from 'node:console';
import fs from 'node:fs';

const grid = fs
  .readFileSync('./day06/file.in', 'utf8')
  .split('\n')
  .filter(Boolean);

// row, col
let pos = [];

// up = 0
// right = 1
// down = 2
// left = 3
let direction = 0;

let visited = new Set();

let inside = true;

for (let row = 0; row < grid.length; row++) {
  for (let col = 0; col < grid[row].length; col++) {
    if (grid[row][col] === '^') {
      pos = [row, col];
      direction = 0;
      break;
    }

    if (grid[row][col] === '>') {
      pos = [row, col];
      direction = 1;
      break;
    }

    if (grid[row][col] === 'v') {
      pos = [row, col];
      direction = 2;
      break;
    }

    if (grid[row][col] === '<') {
      pos = [row, col];
      direction = 3;
      break;
    }
  }
}

visited.add(`${pos[0]},${pos[1]}`);

while (inside) {
  //look ahead

  let nextStepValue = '';

  if (direction === 0) {
    nextStepValue = grid[pos[0] - 1]?.[pos[1]] ?? 'OUTSIDE';
  }

  if (direction === 1) {
    nextStepValue = grid[pos[0]][pos[1] + 1] ?? 'OUTSIDE';
  }

  if (direction === 2) {
    nextStepValue = grid[pos[0] + 1]?.[pos[1]] ?? 'OUTSIDE';
  }

  if (direction === 3) {
    nextStepValue = grid[pos[0]][pos[1] - 1] ?? 'OUTSIDE';
  }

  // if next is outside break
  if (nextStepValue === 'OUTSIDE') {
    inside = false;
    break;
  }

  // if next step is a wall turn 90 degrees
  if (nextStepValue === '#') {
    direction = (direction + 1) % 4;
  }

  // step forward
  if (direction === 0) {
    pos[0] = pos[0] - 1;
  }
  if (direction === 1) {
    pos[1] = pos[1] + 1;
  }
  if (direction === 2) {
    pos[0] = pos[0] + 1;
  }
  if (direction === 3) {
    pos[1] = pos[1] - 1;
  }

  visited.add(`${pos[0]},${pos[1]}`);
}

// start here
log('part 1', visited.size);
