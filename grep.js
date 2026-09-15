#!/usr/bin/env node

const fs = require('fs');

const [pattern, filename] = process.argv.slice(2);
if (!pattern || !filename) {
  console.error('Usage: node grep.js <pattern> <file>');
  process.exit(1);
}

const lines = fs.readFileSync(filename, 'utf8').split(/\r?\n/);
for (const line of lines) {
  if (line.includes(pattern)) console.log(line);
}
