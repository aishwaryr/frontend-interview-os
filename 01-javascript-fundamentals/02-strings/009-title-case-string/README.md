# Title Case String

## Problem Statement

Given a string title, convert it to title case. Capitalize the first and last word, capitalize major words, and keep common minor words lowercase when they appear in the middle.

## Examples

```js
titleCaseString("the lord of the rings");
// returns "The Lord of the Rings"
titleCaseString("a tale of two cities");
// returns "A Tale of Two Cities"
titleCaseString("THE WIND IN THE WILLOWS");
// returns "The Wind in the Willows"
```

## Constraints

- Words are separated by spaces.
- Output should use single spaces between words.
- Common minor words include a, an, the, and, but, or, for, nor, on, at, to, from, by, of, and in.
- Return a string.

## Worked Example

### Observation 1

Title casing depends on both the word and its position.

### Observation 2

Minor words are lowercase only when they are not the first or last word.

### Key Insight

Normalize words to lowercase, then apply position-aware capitalization.

### High-Level Algorithm

1. Trim and split the title into words.
2. Lowercase every word.
3. For each word, decide whether it should be capitalized.
4. Capitalize first word, last word, and words not in the minor-word set.
5. Join with single spaces.

### Pseudocode

```text
words = normalized word list
for each word with index
  if first or last or not minor word: capitalize
  else keep lowercase
return joined words
```

### Implementation Tips

- Store minor words in a Set.
- Normalize input spacing before processing.
- Empty input should return an empty string.

## Mental Model

### Reusable Interview Pattern

Rule-based token formatting.

### When To Recognize It

Use this when formatting depends on token value and token position.

### Similar Questions

- Format article headlines
- Normalize display labels
- Convert slugs to titles

### Common Data Structures Involved

- Set of minor words
- Array of normalized words

## Interview Guide

### Hints

1. Title case is not just capitalizing every word.
2. Some words are special when they are in the middle.
3. A Set can store minor words.
4. First and last words should still be capitalized.
5. Normalize to lowercase before applying rules.

### Complexity

Time complexity is O(n), where n is the string length. Space complexity is O(w) for the word array. The tradeoff is that explicit rule handling is more verbose but matches real title-case behavior better.

### Interview Follow-ups

- How would you support hyphenated words?
- Should punctuation affect capitalization?
- How would you make the minor-word list configurable?
- How would locale-specific casing change the solution?

### Variants

- Easier variation: Capitalize every word.
- Medium variation: Keep minor words lowercase in the middle.
- Hard variation: Support hyphenated and punctuated titles.
- Real interview variation: Format blog post titles in a CMS.

### Common Mistakes

- Capitalizing every word regardless of minor-word rules.
- Lowercasing the first word when it is "the" or "a".
- Forgetting to normalize all-uppercase input.
- Producing repeated spaces in the output.
