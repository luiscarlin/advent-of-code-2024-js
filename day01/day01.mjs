import { add } from 'mathjs';
import fs from 'node:fs';

function part1() {
  let left = [];
  let right = [];

  const data = fs
    .readFileSync('./day01/file.in', 'utf8')
    .split('\n')
    .filter(Boolean);

  data.forEach((line, index) => {
    const [l, r] = line.split('  ');

    left.push(Number(l));
    right.push(Number(r));
  });

  left = left.sort();
  right = right.sort();

  const diff = [];

  for (let i = 0; i < left.length; i++) {
    diff.push(Math.abs(left[i] - right[i]));
  }

  console.log('part 1', add(...diff));
}

function part2() {
  const data = fs.readFileSync('./day01/file.in', 'utf8');
  // start here
  console.log('part 2', 'not yet implemented');
}

part1();
part2();
