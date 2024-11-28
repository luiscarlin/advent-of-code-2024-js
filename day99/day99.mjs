import { add } from 'mathjs';
import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const lines = fs
    .readFileSync('./day99/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  const nums = lines.map((line) => {
    const digits = line.match(/\d/g);

    return Number(digits[0] + digits.at(-1));
  });

  log('part 1', add(...nums));
}

function part2() {
  const lines = fs
    .readFileSync('./day99/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  const nums = lines.map((line) => {
    const matches = [];

    for (let i = 0; i < line.length; i++) {
      if (!isNaN(line[i]) && line[i] !== ' ') {
        matches.push(line[i]);
      }

      [
        'one',
        'two',
        'three',
        'four',
        'five',
        'six',
        'seven',
        'eight',
        'nine',
      ].forEach((val, d) => {
        if (line.slice(i).startsWith(val)) {
          matches.push((d + 1).toString());
        }
      });
    }

    return Number(matches[0] + matches.at(-1));
  });

  log('part 2', add(...nums));
}

part1();
part2();
