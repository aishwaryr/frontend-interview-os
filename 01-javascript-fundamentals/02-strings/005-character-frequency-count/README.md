# Character Frequency Count

## Problem Statement

Given a string, return an object that maps each character to the number of times it appears.

## Examples

```js
characterFrequencyCount("hello");
// returns { h: 1, e: 1, l: 2, o: 1 }
characterFrequencyCount("aabbb");
// returns { a: 2, b: 3 }
characterFrequencyCount("");
// returns {}
```

## Constraints

- The input may be empty.
- Character comparison is case-sensitive.
- Spaces and punctuation count as characters.
- Return a plain object.

## Worked Example

### Observation 1

Each character contributes exactly one to its count.

### Observation 2

The first time a character appears, its previous count is zero.

### Key Insight

Counting characters is repeated lookup and increment.

### High-Level Algorithm

1. Create an empty object.
2. Loop through each character.
3. Read its current count or use zero.
4. Store the incremented count.
5. Return the object.

### Pseudocode

```text
counts = {}
for char in string
  counts[char] = existing count + 1
return counts
```

### Implementation Tips

- Use nullish coalescing or an explicit missing check.
- Be clear whether case should matter.
- Returning an object makes the result easy to inspect in practice files.

## Mental Model

### Reusable Interview Pattern

Frequency counting.

### When To Recognize It

Use this whenever the prompt asks how many times each item appears.

### Similar Questions

- Count words in a sentence
- Build a histogram
- Check whether two strings have matching counts

### Common Data Structures Involved

- Object or Map
- Single traversal

## Interview Guide

### Hints

1. You need one count per distinct character.
2. Start missing characters at zero.
3. Increment the count every time the character appears.
4. A plain object is enough for string keys.
5. Return the whole count table.

### Complexity

Time complexity is O(n). Space complexity is O(k), where k is the number of distinct characters. A Map is safer for arbitrary keys, while an object is convenient for character counts.

### Interview Follow-ups

- Should uppercase and lowercase be combined?
- Should spaces count?
- How would you return the most frequent character?
- Can this be adapted for words instead of characters?

### Variants

- Easier variation: Count one specific character.
- Medium variation: Count every character.
- Hard variation: Return the top K most frequent characters.
- Real interview variation: Count typed characters for input analytics.

### Common Mistakes

- Reinitializing the count on every occurrence.
- Forgetting the empty string case.
- Accidentally ignoring spaces.
- Returning only unique characters without counts.
