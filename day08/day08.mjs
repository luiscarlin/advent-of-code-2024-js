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
  // start here
  const raw = fs.readFileSync('./day08/file.in', 'utf8').trim().split('\n');

  // get number of rows and columns
  const rows = raw.length;
  const cols = raw[0].length;

  const antennas = new Map();

  // parse through the raw input and store x,y coordinates of each antenna by frequency
  // (e.g., antennas: Map { 'A' => [ [0,0], [1,3] ], 'B' => [ [2,2], [4,4] ] })
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const cell = raw[row][col];
      if (cell !== '.') {
        // if the map does not have this frequency, initialize it with an empty array
        if (!antennas.has(cell)) {
          antennas.set(cell, []);
        }
        // store the position of the antenna
        // as [row, col] tuple in the array for this frequency
        antennas.get(cell).push([row, col]);
      }
    }
  }

  // store all unique antinodes in a set
  // example: Set { '0,0', '1,1', '2,2' }
  const antinodes = new Set();

  // ex: positions = [ [0,0], [1,3], [2,1] ]
  for (const coordinateList of antennas.values()) {
    // go through all unique pairs of antennas for this frequency
    for (let i = 0; i < coordinateList.length; i++) {
      for (let j = i + 1; j < coordinateList.length; j++) {
        // 2 antennas at (r1,c1) and (r2,c2)
        const [r1, c1] = coordinateList[i];
        const [r2, c2] = coordinateList[j];

        // store the two antennas themselves as antinodes
        antinodes.add(`${r1},${c1}`);
        antinodes.add(`${r2},${c2}`);

        // direction vector from (r1,c1) to (r2,c2)
        // ex: dr = 3, dc = 6 for (1,2) to (4,8)
        const dr = r2 - r1; // "rise" (change in y/rows)
        const dc = c2 - c1; // "run" (change in x/columns)

        // Find GCD to get the smallest step
        const gcd = (a, b) => (b === 0 ? Math.abs(a) : gcd(b, a % b));

        const g = gcd(dr, dc);
        const stepR = dr / g;
        const stepC = dc / g;

        // Walk the line in both directions from r1,c1
        // Forward direction
        let r = r1 + stepR;
        let c = c1 + stepC;
        while (r >= 0 && r < rows && c >= 0 && c < cols) {
          antinodes.add(`${r},${c}`);
          r += stepR;
          c += stepC;
        }

        // Backward direction
        r = r1 - stepR;
        c = c1 - stepC;
        while (r >= 0 && r < rows && c >= 0 && c < cols) {
          antinodes.add(`${r},${c}`);
          r -= stepR;
          c -= stepC;
        }
      }
    }
  }
  log('part 2', antinodes.size);
}

part1();
part2();
