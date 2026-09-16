# IT 207 AI-Assisted Programming Workshop

## Section 1 — Command Description

`fancy-grep.js` is my primary tool. It uses both `grep` and `head`. `fancy-grep.js` will find a specified pattern in one file, print the requested number of lines that contain the pattern, and report how many total matching lines it found.

Use this exact format when running the tool:

```bash
node fancy-grep.js <pattern> <number> <file>
```

Here is an example:

```bash
node fancy-grep.js a 2 sample.txt
```

In this example, the output is `apple`, `banana`, and `Total matches: 4`.

`grep.js`, `head.js`, and `count-words.js` are also included in the repository. I used Node.js for these tools; however, there are no additional packages that need to be installed.

### Testing and edge cases

Running `npm test` tests all of the programs, including the following edge cases:

- A pattern with no matches reports `Total matches: 0`.
- A limit larger than the number of matches prints every available match.
- A limit of 0 prints no matching lines but still reports the total.
- Missing arguments, a negative limit, or a nonnumeric limit displays a usage message and exits with a nonzero status.
- An empty file contains zero words.

## Section 2 — AI-Assisted Programming

I used AI to provide explanations about the inputs and outputs from `grep` and `head`, provide at least two test-case suggestions, describe edge conditions, and help explain unexpected results. AI also provided guidance on how to use `process.argv` and `fs.readFileSync`.

AI provided several test-case ideas, including a normal pattern match, no matches, an empty file, a limit of 0 in the Fancy Command, and invalid input. I was still responsible for decisions such as which commands would be combined, what the command-line arguments would look like, what information to show in the results, reviewing the program behavior, running the tests, and comparing the expected output with the actual output. The final design combines `grep` and `head` and reports the total number of matching lines.

In some cases AI provided inaccurate information, omitted details, or misinterpreted the request. AI stated that `count-words.js` separated words using single spaces, altered the required Fancy Command syntax, and inaccurately stated that the Fancy Command had a default result limit. AI also initially overlooked direct tests for a limit of 0 and invalid input. I found these errors by reviewing the source code and executing the commands.

## Run the complete test suite

```bash
npm test
```

A successful run prints `All tests passed.`
