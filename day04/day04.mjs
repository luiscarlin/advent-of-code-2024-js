import { log } from 'node:console';
import fs from 'node:fs';

function searchPattern(lines, row, col, rowInc, colInc) {
  const x = lines[row]?.[col] ?? '';
  const m = lines[row + rowInc]?.[col + colInc] ?? '';
  const a = lines[row + 2 * rowInc]?.[col + 2 * colInc] ?? '';
  const s = lines[row + 3 * rowInc]?.[col + 3 * colInc] ?? '';
  return ['XMAS', 'SAMX'].includes(x + m + a + s);
}

function part1() {
  const lines = fs
    .readFileSync('./day04/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  let found = 0;

  for (let row = 0; row < lines.length; row++) {
    for (let col = 0; col < lines[row].length; col++) {
      if (
        searchPattern(lines, row, col, 0, 1) || // horizontally
        searchPattern(lines, row, col, 1, 0) || // vertically
        searchPattern(lines, row, col, 1, 1) || // diagonally (down-right)
        searchPattern(lines, row, col, 1, -1) // diagonally (down-left)
      ) {
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
