#!/usr/bin/env node

const fs = require('fs');

const [pattern, limitText, filename] = process.argv.slice(2);
const limit = Number(limitText);

if (!pattern || !filename || !Number.isInteger(limit) || limit < 0) {
  console.error('Usage: node fancy-grep.js <pattern> <number> <file>');
  process.exit(1);
}

const lines = fs.readFileSync(filename, 'utf8').split(/\r?\n/);
const matches = lines.filter((line) => line.includes(pattern));

for (const line of matches.slice(0, limit)) {
  console.log(line);
}

console.log(`Total matches: ${matches.length}`);
