import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const lines = fs.readFileSync('./day03/file.in', 'utf8');

  const matches = lines.match(/mul\(\d{1,3},\d{1,3}\)/g);

  const sum = matches.reduce((acc, match) => {
    const [left, right] = match.match(/\d{1,3}/g).map(Number);

    return acc + left * right;
  }, 0);

  log('part 1', sum);
}

function part2() {
  const lines = fs.readFileSync('./day03/file.in', 'utf8');

  const matches = lines.match(/mul\(\d{1,3},\d{1,3}\)|don't\(\)|do\(\)/g);

  let canMultiple = true;
  let sum = 0;

  for (const match of matches) {
    if (match === 'do()' || match === "don't()") {
      if (match === 'do()') {
        canMultiple = true;
      }
      if (match === "don't()") {
        canMultiple = false;
      }
      continue;
    }

    if (canMultiple) {
      const [left, right] = match.match(/\d{1,3}/g).map(Number);

      sum += left * right;
    }
  }

  log('part 2', sum);
}

part1();
part2();
