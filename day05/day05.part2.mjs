import { log } from 'node:console';
import fs from 'node:fs';

function part2() {
  const [edges, queries] = fs
    .readFileSync('./day05/file.in', 'utf8')
    .split('\n\n')
    .map((x) => x.split('\n').filter(Boolean));

  const E = new Map();
  const ER = new Map();

  let p1 = 0;
  let p2 = 0;

  edges.forEach((line) => {
    const [x, y] = line.split('|').map(Number);

    if (!E.has(y)) E.set(y, new Set());
    if (!ER.has(x)) ER.set(x, new Set());

    E.get(y).add(x);
    ER.get(x).add(y);
  });

  queries.forEach((query) => {
    const row = query.split(',').map(Number);

    if (row.length % 2 !== 1) throw new Error('Invalid query length');
    let ok = true;

    for (let i = 0; i < row.length; i++) {
      for (let j = 0; j < row.length; j++) {
        if (i < j && E.get(row[i]).has(row[j])) {
          ok = false;
        }
      }
    }

    if (ok) {
      p1 += row[Math.floor(row.length / 2)];
    } else {
      // Kahn's algorithm

      // array to store topologically sorted elements
      const sortedPages = [];

      // queue to store elements with no incoming edges
      const queue = [];

      // map to store in-degrees of each element
      const inDegrees = new Map(
        row.map((page) => [
          page,
          [...(E.get(page) || [])].filter((x) => row.includes(x)).length,
        ]),
      );

      row.forEach((v) => {
        if (inDegrees.get(v) === 0) queue.push(v);
      });

      while (queue.length > 0) {
        const x = queue.shift();
        sortedPages.push(x);
        (ER.get(x) || []).forEach((y) => {
          if (inDegrees.has(y)) {
            inDegrees.set(y, inDegrees.get(y) - 1);
            if (inDegrees.get(y) === 0) queue.push(y);
          }
        });
      }

      p2 += sortedPages[Math.floor(sortedPages.length / 2)];
    }
  });

  log('part1', p1);
  log('part2', p2);
}

part2();
