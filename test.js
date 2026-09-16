const assert = require('assert');
const { execFileSync, spawnSync } = require('child_process');

const run = (script, args) => execFileSync(process.execPath, [script, ...args], { encoding: 'utf8' });

assert.strictEqual(run('grep.js', ['ap', 'sample.txt']), 'apple\napricot\n');
assert.strictEqual(run('head.js', ['-n', '2', 'sample.txt']), 'apple\nbanana\n');
assert.strictEqual(run('count-words.js', ['sample.txt']), '5\n');
assert.strictEqual(run('count-words.js', ['empty.txt']), '0\n');
assert.strictEqual(run('fancy-grep.js', ['a', '2', 'sample.txt']), 'apple\nbanana\nTotal matches: 4\n');
assert.strictEqual(run('fancy-grep.js', ['ap', '5', 'sample.txt']), 'apple\napricot\nTotal matches: 2\n');
assert.strictEqual(run('fancy-grep.js', ['orange', '3', 'sample.txt']), 'Total matches: 0\n');
assert.strictEqual(run('fancy-grep.js', ['a', '0', 'sample.txt']), 'Total matches: 4\n');

const invalidLimit = spawnSync(process.execPath, ['fancy-grep.js', 'ap', 'nope', 'sample.txt'], { encoding: 'utf8' });
assert.strictEqual(invalidLimit.status, 1);
assert.strictEqual(invalidLimit.stderr, 'Usage: node fancy-grep.js <pattern> <number> <file>\n');
console.log('All tests passed.');
