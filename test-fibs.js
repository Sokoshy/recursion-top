// Petit test pour fibs(n) - ne contient PAS la solution, juste les vérifications.
// Usage: node test-fibs.js  (ou: bun test-fibs.js)
// Prérequis: dans fibonacci.js, exporte ta fonction à la fin avec :
// module.exports = { fibs };

const { fibs } = require('./fibonacci.js');

function arraysEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

const cases = [
  { input: 0, expected: [] },
  { input: 1, expected: [0] },
  { input: 2, expected: [0, 1] },
  { input: 5, expected: [0, 1, 1, 2, 3] },
  { input: 8, expected: [0, 1, 1, 2, 3, 5, 8, 13] },
];

let ok = 0;
for (const { input, expected } of cases) {
  let got;
  try {
    got = fibs(input);
  } catch (e) {
    console.log(`❌ fibs(${input}) a levé une erreur: ${e.message}`);
    continue;
  }
  if (arraysEqual(got, expected)) {
    console.log(`✅ fibs(${input}) OK -> ${JSON.stringify(got)}`);
    ok++;
  } else {
    console.log(`❌ fibs(${input}) -> obtenu ${JSON.stringify(got)}, attendu ${JSON.stringify(expected)}`);
  }
}

console.log(`\n${ok}/${cases.length} tests passés`);
