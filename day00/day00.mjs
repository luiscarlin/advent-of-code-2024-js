import fs from 'node:fs';

function part1() {
  const data = fs.readFileSync('./day00/file.in', 'utf8');
  console.log(data);
  console.log('part 1', 40);
}

function part2() {
  const data = fs.readFileSync('./day00/file.in', 'utf8');
  console.log(data);
  console.log('part 2', 100);
}

part1();
part2();
