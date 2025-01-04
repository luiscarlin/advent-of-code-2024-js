import { log } from 'node:console';
import fs from 'node:fs';
import { DefaultMap } from '../utils.mjs';

function part1() {
  const G = fs.readFileSync('./day08/test.in', 'utf8').trim().split('\n');

  // parse the grid
  const R = G.length;
  const C = G[0].length;
  const P = new DefaultMap(() => []);

  for (let r = 0; r < R; r++) {
    for (let c = 0; c < C; c++) {
      if (G[r][c] === ' ') {
        continue;
      }

      // add the position to the list of positions for the given character
      P.get(G[r][c]).push([r, c]);
    }
  }

  log('part 1', P);

  // start here
  log('part 1', 'not yet implemented');
}

function part2() {
  const lines = fs.readFileSync('./day08/test.in', 'utf8');
  // start here
  log('part 2', 'not yet implemented');
}

part1();
part2();
