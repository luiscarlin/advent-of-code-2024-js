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

  log('part 1', add(...diff));
}

function part2() {
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
  // start here

  let similarityScore = 0;

  for (let i = 0; i < left.length; i++) {
    const times = right.filter((r) => r === left[i]).length;

    similarityScore += left[i] * times;
  }

  console.log('part 2', similarityScore);
}

part1();
part2();
