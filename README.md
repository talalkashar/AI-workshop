# IT 207 AI-Assisted Programming Workshop

The programs in this project are a simplified version of grep.js, a simplified version of head.js, a word counting program called count-words.js, and an example of a "Fancy Command" called fancy-grep.js which is a combination of grep and head.

## Programs

- grep.js: The function reads a single file and prints all of its lines if they contain your chosen search pattern.
- head.js: This function will print the first ten lines by default, but you can enter the -n option followed by a nonnegative integer to get a different amount of lines.
- count-words.js: This function counts how many words are separated by some form of whitespace.
- fancy-grep.js: Searches one file for a specific string or pattern, then displays the total number of matches found and prints the first requested number of matching lines.

## Needs & Usage

You'll need to run Node.js on your machine. This project uses no outside packages.

Run each of these files in the current working directory (project directory):

```bash
node grep.js ap sample.txt
node head.js -n 2 sample.txt
node count-words.js sample.txt
node fancy-grep.js a 2 sample.txt
```

When you run fancy-grep.js you have to provide three things:

- A pattern that you want to search for.
- An integer greater than or equal to zero, which represents how many results you want to see at most.
- The name of the file that you'd like to search.

The command format looks like this:

```bash
node fancy-grep.js <pattern> <number> <file>
```

Running `node fancy-grep.js a 2 sample.txt` prints apple and banana. Immediately after printing those two words it displays `Total matches: 4`.

## Testing

Execute `npm test` in order to automate testing for this project. If all of the tests pass, `All tests passed` will be printed. The tests include:

- grep matches
- head line limits
- normal and empty-file word counts
- limiting the Fancy Command output
- requesting more results than the number of available matches
- a pattern with no matches

## Edge Cases

- When there are no matches it will print `Total matches: 0`.
- When you set a limit greater than the number of available matches it will still print every available match.
- If your limit is set to 0, it will print no matching lines but still report the total number of matches.
- If you do not enter every argument, use a negative limit, or use a nonnumeric limit, it will exit with a nonzero status and display a usage message.
- There are zero words in an empty file.

## AI Assistance and Verification

AI assisted me in learning the original Linux commands, planning the Fancy Command, suggesting testing options, and identifying potential edge cases. To verify that the suggested ideas were valid, I ran the Linux commands, reviewed my Node.js code, manually checked the output from each command, and tested the programs using automated tests. The scope of the implementation was defined to use only synchronous fs API calls, process.argv, strings, arrays, loops, and regular expressions.
