import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const raw = fs.readFileSync('./day08/file.in', 'utf8').trim().split('\n');

  const rows = raw.length;
  const cols = raw[0].length;

  const antennas = new Map();

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = raw[row][col];
      if (cell !== '.') {
        if (!antennas.has(cell)) {
          antennas.set(cell, []);
        }
        antennas.get(cell).push([row, col]);
      }
    }
  }

  const antinodes = new Map();

  const antinodesSet = new Set();

  for (const [frequency, positions] of antennas) {
    for (let i = 0; i < positions.length; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const [r1, c1] = positions[i];
        const [r2, c2] = positions[j];

        // log(`Antenna ${frequency} at (${r1},${c1}) and (${r2},${c2})`);

        const antinode1 = [2 * r1 - r2, 2 * c1 - c2];
        const antinode2 = [2 * r2 - r1, 2 * c2 - c1];

        // log(`Antinode 1 for ${frequency} at ${antinode1}`);
        // log(`Antinode 2 for ${frequency} at ${antinode2}`);

        [antinode1, antinode2]
          .filter(([r, c]) => r >= 0 && r < rows && c >= 0 && c < cols)
          .forEach(([r, c]) => {
            antinodesSet.add(`${r},${c}`);
          });
      }
    }
  }

  // log('Total antinodes found:', antinodesSet.size);

  log('part 1', antinodesSet.size);
}

function part2() {
  const lines = fs.readFileSync('./day08/test.in', 'utf8');
  // start here
  log('part 2', 'not yet implemented');
}

part1();
part2();
