import { add } from 'mathjs';
import { log } from 'node:console';
import fs from 'node:fs';

function part1() {
  const data = fs
    .readFileSync('./day01/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  const [left, right] = data.reduce(
    (acc, line) => {
      const [l, r] = line.split('  ').map(Number);
      acc[0].push(l);
      acc[1].push(r);
      return acc;
    },
    [[], []],
  );

  const sortedLeft = left.sort((a, b) => a - b);
  const sortedRight = right.sort((a, b) => a - b);

  const diff = sortedLeft.map((l, i) => Math.abs(l - sortedRight[i]));

  log('part 1', add(...diff));
}

function part2() {
  const data = fs
    .readFileSync('./day01/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  const [left, right] = data.reduce(
    (acc, line) => {
      const [l, r] = line.split('  ').map(Number);
      acc[0].push(l);
      acc[1].push(r);
      return acc;
    },
    [[], []],
  );

  let similarityScore = 0;

  for (let i = 0; i < left.length; i++) {
    const times = right.filter((r) => r === left[i]).length;

    similarityScore += left[i] * times;
  }

  log('part 2', similarityScore);
}

part1();
part2();
