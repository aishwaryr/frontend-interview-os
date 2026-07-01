# Capitalize Words

## Problem Statement

Given a sentence, return a new sentence where the first letter of every word is uppercase and the remaining letters are lowercase.

## Examples

```js
capitalizeWords("hello world");
// returns "Hello World"
capitalizeWords("jAVAscript is FUN");
// returns "Javascript Is Fun"
capitalizeWords("");
// returns ""
```

## Constraints

- Words are separated by spaces.
- Multiple spaces should be preserved.
- Letter casing should be normalized per word.
- Return a string.

## Worked Example

### Observation 1

Each word can be transformed independently.

### Observation 2

Whitespace may matter, so splitting on a single space preserves empty segments between repeated spaces.

### Key Insight

Split by spaces, transform non-empty word segments, and join with spaces again.

### High-Level Algorithm

1. Split the sentence on spaces.
2. For each segment, leave it unchanged if it is empty.
3. Otherwise uppercase the first character and lowercase the rest.
4. Join the segments with spaces.
5. Return the result.

### Pseudocode

```text
parts = sentence split by " "
for each part
  if part is empty: keep it
  else capitalize first char and lowercase rest
return parts joined by " "
```

### Implementation Tips

- Preserve empty split segments to keep repeated spaces.
- Use `slice(1)` for the remainder of a word.
- Be clear about whether punctuation is part of a word.

## Mental Model

### Reusable Interview Pattern

Token transform and rejoin.

### When To Recognize It

Use this when each word or token receives the same local transformation.

### Similar Questions

- Normalize names
- Format labels
- Convert words to sentence case

### Common Data Structures Involved

- Array of word segments
- String slicing

## Interview Guide

### Hints

1. The sentence can be treated word by word.
2. Repeated spaces are easier to preserve if you split on a literal space.
3. Empty segments should stay empty.
4. For a word, uppercase the first character.
5. Lowercase the remaining characters.

### Complexity

Time complexity is O(n). Space complexity is O(n) for the split parts and returned string. The tradeoff is readability versus doing everything with manual index scanning.

### Interview Follow-ups

- Should hyphenated words be capitalized on both sides?
- Should punctuation be preserved?
- How should apostrophes be handled?
- Should multiple spaces be collapsed or preserved?

### Variants

- Easier variation: Capitalize one word.
- Medium variation: Capitalize every space-separated word.
- Hard variation: Capitalize locale-aware words.
- Real interview variation: Format a user's display name.

### Common Mistakes

- Losing repeated spaces.
- Uppercasing the first letter but leaving the rest unchanged.
- Failing on empty strings.
- Treating punctuation rules as obvious without clarifying.
