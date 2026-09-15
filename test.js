const assert = require('assert');
const { execFileSync } = require('child_process');

const run = (script, args) => execFileSync(process.execPath, [script, ...args], { encoding: 'utf8' });

assert.strictEqual(run('grep.js', ['ap', 'sample.txt']), 'apple\napricot\n');
assert.strictEqual(run('head.js', ['-n', '2', 'sample.txt']), 'apple\nbanana\n');
assert.strictEqual(run('count-words.js', ['sample.txt']), '5\n');
assert.strictEqual(run('count-words.js', ['empty.txt']), '0\n');
console.log('All tests passed.');
