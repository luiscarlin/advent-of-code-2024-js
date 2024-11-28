import fs from 'node:fs';
import { log } from 'node:console';

function part1() {
  const data = fs.readFileSync('./day0/day0.in', 'utf8');

  log(data);
  log('part 1', 40);
}

function part2() {
  const data = fs.readFileSync('./day0/day0.in', 'utf8');
  log(data);

  log('part 2', 100);
}

part1();
part2();
