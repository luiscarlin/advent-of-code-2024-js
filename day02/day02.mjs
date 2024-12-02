import { log } from 'node:console';
import fs from 'node:fs';

function checkLine(line) {
  let rowIncreasing;
  let safe = false;

  for (let i = 0; i < line.length; i++) {
    if (i === 0) {
      continue;
    }

    const prev = line[i - 1];
    const curr = line[i];

    const diff = curr - prev;

    if (Math.abs(diff) > 3 || diff === 0) {
      break;
    }

    const increasing = diff > 0;

    if (i === 1) {
      rowIncreasing = increasing;
    }

    if (rowIncreasing !== increasing) {
      break;
    }

    if (i === line.length - 1) {
      safe = true;
    }
  }

  return safe;
}

function part1() {
  const lines = fs
    .readFileSync('./day02/file.in', 'utf8')
    .split('\n')
    .filter(Boolean)
    .map((line) => line.split(' ').map(Number));

  let linesSafe = 0;

  for (const line of lines) {
    const isSafe = checkLine(line);

    if (isSafe) {
      linesSafe++;
    }
  }

  log('part 1', linesSafe);
}

function part2() {
  const lines = fs.readFileSync('./day02/file.in', 'utf8');
  // start here
  log('part 2', 'not yet implemented');
}

part1();
part2();
