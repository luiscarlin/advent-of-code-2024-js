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

      if (['XMAS', 'SAMX'].includes(hx + hm + ha + hs)) {
        found++;
      }

      // search vertically
      const vx = lines[row][col];
      const vm = lines[row + 1]?.[col] ?? '';
      const va = lines[row + 2]?.[col] ?? '';
      const vs = lines[row + 3]?.[col] ?? '';

      if (['XMAS', 'SAMX'].includes(vx + vm + va + vs)) {
        found++;
      }

      // search diagonally (down-right)
      const dx = lines[row][col];
      const dm = lines[row + 1]?.[col + 1] ?? '';
      const da = lines[row + 2]?.[col + 2] ?? '';
      const ds = lines[row + 3]?.[col + 3] ?? '';

      if (['XMAS', 'SAMX'].includes(dx + dm + da + ds)) {
        found++;
      }

      // search diagonally (down-left)
      const dlx = lines[row][col];
      const dlm = lines[row + 1]?.[col - 1] ?? '';
      const dla = lines[row + 2]?.[col - 2] ?? '';
      const dls = lines[row + 3]?.[col - 3] ?? '';

      if (['XMAS', 'SAMX'].includes(dlx + dlm + dla + dls)) {
        found++;
      }
    }
  }

  log('part 1', found);
}

function part2() {
  const lines = fs
    .readFileSync('./day04/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  let found = 0;

  for (let row = 0; row < lines.length; row++) {
    for (let col = 0; col < lines[row].length; col++) {
      // M.S
      // .A.
      // M.S

      // search diagonally (down-right)
      const dm = lines[row][col];
      const da = lines[row + 1]?.[col + 1] ?? '';
      const ds = lines[row + 2]?.[col + 2] ?? '';

      // search diagonally (down-left)
      const dlm = lines[row][col + 2];
      const dla = lines[row + 1]?.[col + 2 - 1] ?? '';
      const dls = lines[row + 2]?.[col + 2 - 2] ?? '';

      if (
        ['MAS', 'SAM'].includes(dm + da + ds) &&
        ['MAS', 'SAM'].includes(dlm + dla + dls)
      ) {
        found++;
      }
    }
  }

  log('part 2', found);
}

part1();
part2();
