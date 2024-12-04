import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const lines = fs
    .readFileSync('./day04/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  let found = 0;

  for (let row = 0; row < lines.length; row++) {
    for (let col = 0; col < lines[row].length; col++) {
      // search horizontally
      const hx = lines[row][col];
      const hm = lines[row][col + 1] ?? '';
      const ha = lines[row][col + 2] ?? '';
      const hs = lines[row][col + 3] ?? '';

      if (hx + hm + ha + hs === 'XMAS' || hx + hm + ha + hs === 'SAMX') {
        found++;
      }

      // search vertically
      const vx = lines[row][col];
      const vm = lines[row + 1]?.[col] ?? '';
      const va = lines[row + 2]?.[col] ?? '';
      const vs = lines[row + 3]?.[col] ?? '';

      if (vx + vm + va + vs === 'XMAS' || vx + vm + va + vs === 'SAMX') {
        found++;
      }

      // search diagonally (down-right)
      const dx = lines[row][col];
      const dm = lines[row + 1]?.[col + 1] ?? '';
      const da = lines[row + 2]?.[col + 2] ?? '';
      const ds = lines[row + 3]?.[col + 3] ?? '';

      if (dx + dm + da + ds === 'XMAS' || dx + dm + da + ds === 'SAMX') {
        found++;
      }

      // search diagonally (down-left)
      const dlx = lines[row][col];
      const dlm = lines[row + 1]?.[col - 1] ?? '';
      const dla = lines[row + 2]?.[col - 2] ?? '';
      const dls = lines[row + 3]?.[col - 3] ?? '';

      if (
        dlx + dlm + dla + dls === 'XMAS' ||
        dlx + dlm + dla + dls === 'SAMX'
      ) {
        found++;
      }
    }
  }

  console.log('found', found);

  // start here
  log('part 1', 'not yet implemented');
}

function part2() {
  const lines = fs.readFileSync('./day04/file.in', 'utf8');
  // start here
  log('part 2', 'not yet implemented');
}

part1();
part2();
