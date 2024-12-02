import { log } from 'node:console';
import fs from 'node:fs';

function checkLine(line) {
  let rowIncreasing = null;

  for (let i = 1; i < line.length; i++) {
    const prev = line[i - 1];
    const curr = line[i];
    const diff = curr - prev;

    if (Math.abs(diff) > 3 || diff === 0) {
      return false;
    }

    const increasing = diff > 0;

    if (rowIncreasing === null) {
      rowIncreasing = increasing;
    } else if (rowIncreasing !== increasing) {
      return false;
    }
  }

  return true;
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
    } else {
      let currIndex = 0;
      let currIndexRemoved = 0;

      while (currIndex < line.length) {
        const lineCopy = line.slice();
        lineCopy.splice(currIndexRemoved, 1);
        const isSafe = checkLine(lineCopy);

        if (isSafe) {
          linesSafe++;
          break;
        }

        currIndex++;
        currIndexRemoved++;
      }
    }
  }

  log('part 2', linesSafe);
}

part1();
part2();
