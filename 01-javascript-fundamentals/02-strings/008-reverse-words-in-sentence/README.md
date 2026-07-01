# Reverse Words In Sentence

## Problem Statement

Given a sentence, return a new sentence with the word order reversed. Trim leading and trailing spaces, and collapse multiple spaces between words into a single space.

## Examples

```js
reverseWordsInSentence("hello world");
// returns "world hello"
reverseWordsInSentence("  the sky is blue  ");
// returns "blue is sky the"
reverseWordsInSentence("a good   example");
// returns "example good a"
```

## Constraints

- The input may contain leading, trailing, or repeated spaces.
- Words are separated by whitespace.
- Return words separated by a single space.
- Return an empty string for input with no words.

## Worked Example

### Observation 1

The words themselves stay the same; only their order changes.

### Observation 2

Extra spaces should not create empty words in the output.

### Key Insight

Normalize the sentence into words, reverse the word array, then join with one space.

### High-Level Algorithm

1. Trim the input.
2. Split on one or more whitespace characters.
3. Reverse the resulting words.
4. Join them with a single space.
5. Return the result.

### Pseudocode

```text
words = trimmed sentence split by whitespace
reverse words
return words joined by single spaces
```

### Implementation Tips

- Handle an all-space string before splitting.
- A regular expression can split on repeated whitespace.
- Do not reverse the characters inside each word.

## Mental Model

### Reusable Interview Pattern

Tokenize, reorder, and rejoin.

### When To Recognize It

Use this when the operation is at the word level rather than the character level.

### Similar Questions

- Reverse array elements
- Normalize whitespace
- Reverse a command phrase

### Common Data Structures Involved

- Array of words
- Whitespace normalization

## Interview Guide

### Hints

1. You need to reverse words, not characters.
2. Extra spaces should not become output words.
3. Trim first or filter empty tokens.
4. Reverse the word array.
5. Join with exactly one space.

### Complexity

Time complexity is O(n). Space complexity is O(n) for the words and output. An in-place approach is possible for mutable character arrays but not necessary for normal JavaScript strings.

### Interview Follow-ups

- Can this be done in-place for a character array?
- Should tabs and newlines count as spaces?
- How should punctuation be treated?
- Should original spacing be preserved?

### Variants

- Easier variation: Reverse words in an array.
- Medium variation: Reverse words in a sentence string.
- Hard variation: Reverse words in-place in a mutable buffer.
- Real interview variation: Normalize and reverse search query terms.

### Common Mistakes

- Reversing every character instead of word order.
- Returning extra spaces.
- Failing on all-space input.
- Splitting only on a single space when tabs are possible.
