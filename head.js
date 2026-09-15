#!/usr/bin/env node

const fs = require('fs');

const args = process.argv.slice(2);
let count = 10;
if (args[0] === '-n') count = Number(args[1]);
const filename = args[args[0] === '-n' ? 2 : 0];

if (!filename || !Number.isInteger(count) || count < 0) {
  console.error('Usage: node head.js [-n number] <file>');
  process.exit(1);
}

const lines = fs.readFileSync(filename, 'utf8').split(/\r?\n/);
console.log(lines.slice(0, count).join('\n'));
