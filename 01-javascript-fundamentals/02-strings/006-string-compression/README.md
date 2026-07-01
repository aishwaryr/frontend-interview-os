# String Compression

## Problem Statement

Given a string, compress consecutive repeated characters using the character followed by its count. Return the compressed string only if it is shorter than the original; otherwise return the original string.

## Examples

```js
stringCompression("aabcccccaaa");
// returns "a2b1c5a3"
stringCompression("abc");
// returns "abc"
stringCompression("aa");
// returns "aa"
```

## Constraints

- The input may be empty.
- Characters are case-sensitive.
- Consecutive runs should be counted separately.
- Return a string.

## Worked Example

### Observation 1

Only consecutive repeated characters belong to the same run.

### Observation 2

Compression may make short strings longer, so the final length matters.

### Key Insight

Scan runs of equal characters, build the encoded version, then compare lengths.

### High-Level Algorithm

1. Return the input for an empty string.
2. Track the current character and its run count.
3. When the character changes, append the previous character and count.
4. Append the final run after the loop.
5. Return the compressed string only if it is shorter.

### Pseudocode

```text
compressed = ""
count = 1
for i from 1 to end
  if current char equals previous char: count++
  else append previous char and count, reset count
append final char and count
return shorter of compressed and original
```

### Implementation Tips

- The final run must be handled after the loop.
- Use strict character comparison.
- Keep the "return original if not shorter" rule separate from run encoding.

## Mental Model

### Reusable Interview Pattern

Run-length scanning with a final comparison.

### When To Recognize It

Use this when consecutive duplicates need to be summarized.

### Similar Questions

- Run-length encoding
- Count consecutive values in an array
- Compress repeated UI events

### Common Data Structures Involved

- String builder array
- Run counter
- Index loop

## Interview Guide

### Hints

1. Consecutive repeats are the unit of compression.
2. Count how long the current run is.
3. Append a run when the next character changes.
4. Do not forget the final run.
5. Compare compressed length with original length before returning.

### Complexity

Time complexity is O(n). Space complexity is O(n) for the compressed parts. The tradeoff is that building an array of parts is usually clearer and more efficient than repeated string concatenation for large inputs.

### Interview Follow-ups

- Should the function always compress, even if longer?
- How would you decompress the result?
- How would you handle counts greater than 9?
- Can this work on a stream?

### Variants

- Easier variation: Count runs but return an array.
- Medium variation: Return the shorter of compressed and original.
- Hard variation: Compress in-place in a character array.
- Real interview variation: Compress repeated keystrokes or analytics events.

### Common Mistakes

- Forgetting to append the final run.
- Counting all matching characters globally instead of consecutive runs.
- Returning a longer compressed string.
- Mishandling one-character strings.
