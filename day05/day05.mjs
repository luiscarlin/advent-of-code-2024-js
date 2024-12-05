import { add } from 'mathjs';
import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const [rules, rowsString] = fs
    .readFileSync('./day05/test.in', 'utf8')
    .split('\n\n')
    .map((x) => x.split('\n').filter(Boolean));

  const correct = [];

  const listOfRows = rowsString.map((row) => row.split(',').map(Number));

  for (const row of listOfRows) {
    if (isRowValidCheck(row, rules)) {
      correct.push(row[Math.floor((row.length - 1) / 2)]);
    }
  }

  log('part 1', add(...correct));
}

function isRowValidCheck(row, rules) {
  let isRowValid = true;

  for (let j = 0; j < row.length; j++) {
    const current = row[j];
    const prev = row.slice(0, j);
    const next = row.slice(j + 1);

    // check previous
    for (const num of prev) {
      if (!rules.includes(`${num}|${current}`)) {
        isRowValid = false;
        break;
      }
    }

    if (!isRowValid) {
      break;
    }

    // check next
    for (const num of next) {
      if (!rules.includes(`${current}|${num}`)) {
        isRowValid = false;
        break;
      }
    }
  }
  return isRowValid;
}

function part2() {
  const lines = fs.readFileSync('./day05/file.in', 'utf8');
  // start here
  log('part 2', 'not yet implemented');
}

part1();
part2();
