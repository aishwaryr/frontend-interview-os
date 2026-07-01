# Basic Run Length Encoding

## Problem Statement

Given a string, encode each consecutive run of the same character as the character followed by the run length. Always return the encoded form.

## Examples

```js
basicRunLengthEncoding("aaabbc");
// returns "a3b2c1"
basicRunLengthEncoding("abcd");
// returns "a1b1c1d1"
basicRunLengthEncoding("");
// returns ""
```

## Constraints

- The input may be empty.
- Characters are case-sensitive.
- Consecutive runs should be encoded separately.
- Always return the encoded string, even if it is longer.

## Worked Example

### Observation 1

Encoding depends on consecutive runs, not total character frequency.

### Observation 2

Every run contributes exactly two pieces: the character and the count.

### Key Insight

Scan once, count the current run, and flush it when the character changes.

### High-Level Algorithm

1. Return an empty string for empty input.
2. Initialize a count for the first run.
3. Move through the string from the second character.
4. If the character matches the previous one, increment the count.
5. Otherwise append the completed run and reset the count.
6. Append the final run and return the encoded string.

### Pseudocode

```text
if string is empty: return ""
parts = []
count = 1
for each character after first
  if same as previous: count++
  else append previous char and count, reset count
append final char and count
return joined parts
```

### Implementation Tips

- Do not compare against the first character forever; compare with the previous character.
- Append the final run after the loop.
- Use an array of parts for readable output construction.

## Mental Model

### Reusable Interview Pattern

Run-length encoding.

### When To Recognize It

Use this when consecutive repeated values should be summarized.

### Similar Questions

- Compress repeated characters
- Summarize repeated array values
- Encode repeated event states

### Common Data Structures Involved

- Run counter
- Output parts array
- Index loop

## Interview Guide

### Hints

1. Count consecutive repeats.
2. A run ends when the next character is different.
3. Append the character and count when a run ends.
4. Remember to append the final run.
5. Always return the encoded result, even if longer.

### Complexity

Time complexity is O(n). Space complexity is O(n) for the encoded output. The tradeoff is that this always encodes, unlike compression variants that return the original when shorter.

### Interview Follow-ups

- How would you decode the result?
- How should multi-digit counts be parsed during decoding?
- Can this be done on a stream?
- How is this different from compression that returns the shorter string?

### Variants

- Easier variation: Count only the first run.
- Medium variation: Encode all runs.
- Hard variation: Encode and decode with multi-digit counts.
- Real interview variation: Encode repeated status changes in logs.

### Common Mistakes

- Forgetting the final run.
- Counting total frequency instead of consecutive frequency.
- Returning the original string when the encoded one is longer.
- Failing on empty input.
