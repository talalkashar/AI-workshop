# Optional Extra Credit Activity

## Project

This project implements simplified versions of two command-line tools and adds one related tool:

- `grep.js` searches a file and prints lines containing a pattern.
- `head.js` prints the first 10 lines, or a requested number of lines.
- `count-words.js` counts whitespace-separated words in a file.

## Approach

I first explored the behavior of the Linux `grep` and `head` commands with a small sample file. I then translated the basic behavior into JavaScript using command-line arguments, file reading, arrays, string methods, and regular expressions.

For the extension, I designed `count-words.js`. It reads a file, separates the contents on whitespace, and prints the number of words. An empty file is handled as zero words.

## Testing and verification

I ran the project tests with:

```bash
npm test
```

The tests verify that:

- `grep.js` returns only matching lines.
- `head.js` returns the requested number of lines.
- `count-words.js` counts the sample file correctly.
- `count-words.js` returns zero for an empty file.

The test suite completed successfully with `All tests passed.`

## Responsible AI reflection

I used Generative AI as a learning assistant to explain how `grep` and `head` work, suggest test cases, and identify possible edge cases. I tested the explanations in the terminal instead of accepting them automatically. I reviewed the code and made the final choice to extend the project with a word-count tool. This process helped me connect existing command-line behavior with JavaScript concepts I had learned in class.

## Project link

https://github.com/talalkashar/AI-workshop
