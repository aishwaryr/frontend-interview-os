# Longest Word

## Problem Statement

Given a sentence, return the longest word. Ignore punctuation at the edges of words. If multiple words have the same maximum length, return the first one.

## Examples

```js
longestWord("The quick brown fox");
// returns "quick"
longestWord("Jumped over the lazy dog");
// returns "Jumped"
longestWord("");
// returns ""
```

## Constraints

- Words are separated by whitespace.
- Leading and trailing punctuation should not count as part of a word.
- Ties should return the first longest word.
- Return a string.

## Worked Example

### Observation 1

You only need to remember the best word seen so far.

### Observation 2

Using a strict greater-than comparison preserves the first word in a tie.

### Key Insight

Scan normalized words once and update the answer only when a longer word appears.

### High-Level Algorithm

1. Split the sentence into word-like tokens.
2. Remove punctuation from the edges of each token.
3. Skip empty tokens.
4. Track the longest cleaned word seen so far.
5. Return the tracked word.

### Pseudocode

```text
best = ""
for token in words
  cleaned = token without edge punctuation
  if cleaned length > best length
    best = cleaned
return best
```

### Implementation Tips

- Use `>` instead of `>=` to keep the first tie.
- Handle empty and punctuation-only strings.
- Keep internal punctuation if it belongs to the word.

## Mental Model

### Reusable Interview Pattern

Single-pass best-so-far scan.

### When To Recognize It

Use this when the prompt asks for the largest, longest, smallest, or best item by a simple metric.

### Similar Questions

- Find maximum number in an array
- Find longest string in a list
- Find highest scoring item

### Common Data Structures Involved

- Best-so-far variable
- Token array or token scan

## Interview Guide

### Hints

1. You do not need to sort.
2. Keep track of the longest word seen so far.
3. Clean punctuation before measuring.
4. Use strict greater-than to preserve the first tie.
5. Return an empty string if no word exists.

### Complexity

Time complexity is O(n). Space complexity is O(w) if you split into words, or O(1) extra space with manual scanning. Splitting is more readable for interviews.

### Interview Follow-ups

- Should punctuation inside a word count?
- How should hyphenated words be handled?
- Can this be done without splitting?
- How would you return all tied longest words?

### Variants

- Easier variation: Find the longest string in an array.
- Medium variation: Find the longest word in a sentence.
- Hard variation: Stream words and track the longest without storing all tokens.
- Real interview variation: Extract the longest search term from a query.

### Common Mistakes

- Sorting when a single pass is enough.
- Returning the last tied word.
- Counting punctuation as word length unintentionally.
- Failing on an empty string.
