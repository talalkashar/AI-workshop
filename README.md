# IT 207 AI-Assisted Programming Workshop

This project contains simplified versions of Linux `grep` and `head`, plus a new command-line tool, `count-words`.

## Run the tools

```bash
node grep.js ap sample.txt
node head.js -n 2 sample.txt
node count-words.js sample.txt
```

`grep.js` prints lines containing a pattern. `head.js` prints the first 10 lines by default, or the number supplied with `-n`. `count-words.js` prints the number of whitespace-separated words in a file.

## Test

```bash
npm test
```

The tests cover matching lines, limiting output, normal word counting, and an empty file.

## AI assistance and verification

I used AI to explain what `grep` and `head` do, suggest test cases, and identify edge cases. I verified the explanations by running the commands in the terminal and reviewed the generated code before using it. I made the final design decisions, including choosing `count-words` as the additional tool.

### Edge cases considered

- A search pattern with no matches produces no matching output.
- A file with fewer lines than requested still prints only the lines available.
- An empty file contains zero words.
- Missing command-line arguments produce a usage message and a nonzero exit code.
