#!/usr/bin/env node

const fs = require('fs');

const filename = process.argv[2];
if (!filename) {
  console.error('Usage: node count-words.js <file>');
  process.exit(1);
}

const text = fs.readFileSync(filename, 'utf8').trim();
const words = text ? text.split(/\s+/) : [];
console.log(words.length);
