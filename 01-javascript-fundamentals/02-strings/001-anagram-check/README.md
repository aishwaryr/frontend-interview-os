# Anagram Check

## Problem Statement

Given two strings, determine whether they are anagrams of each other. Treat uppercase and lowercase letters as the same, and ignore spaces.

## Examples

```js
anagramCheck("listen", "silent");
// returns true
anagramCheck("hello", "world");
// returns false
anagramCheck("Dormitory", "dirty room");
// returns true
```

## Constraints

- Input strings may contain letters and spaces.
- Comparison should be case-insensitive.
- Spaces should not affect the result.
- Return a boolean.

## Worked Example

### Observation 1

Anagrams contain the same characters with the same counts.

### Observation 2

Order does not matter, but frequency does.

### Key Insight

Normalize both strings first, then compare character counts.

### High-Level Algorithm

1. Convert both strings to lowercase and remove spaces.
2. If the normalized lengths differ, return false.
3. Count each character in the first string.
4. Subtract counts using the second string.
5. If any count is missing or goes below zero, return false; otherwise return true.

### Pseudocode

```text
left = normalize(first)
right = normalize(second)
if lengths differ: return false
counts = character counts from left
for char in right
  if char is missing: return false
  decrement count
return true
```

### Implementation Tips

- Normalize before counting so the loop stays simple.
- A Map avoids accidental object key collisions.
- Check length after normalization for a quick rejection.

## Mental Model

### Reusable Interview Pattern

Frequency map comparison.

### When To Recognize It

Use this when two strings or arrays must contain the same items regardless of order.

### Similar Questions

- Valid anagram
- Compare two inventory lists
- Check if two words can be rearranged into each other

### Common Data Structures Involved

- Map from character to count
- Normalized strings

## Interview Guide

### Hints

1. The order of characters is not important.
2. Counts still matter, so duplicates cannot be ignored.
3. Normalize case and spaces before comparing.
4. Use a frequency map for one string.
5. Walk the second string and decrement counts.

### Complexity

Time complexity is O(n + m), where n and m are the string lengths. Space complexity is O(k), where k is the number of distinct normalized characters. Sorting is simpler to describe but costs O(n log n).

### Interview Follow-ups

- How would you handle punctuation?
- Should Unicode accents be normalized?
- Could this be solved by sorting?
- How would this scale for very long strings?

### Variants

- Easier variation: Compare two lowercase strings with no spaces.
- Medium variation: Ignore spaces and case.
- Hard variation: Support full Unicode normalization.
- Real interview variation: Detect duplicate user-entered tags regardless of order.

### Common Mistakes

- Comparing strings directly without rearrangement logic.
- Forgetting duplicate counts.
- Ignoring case in one string but not the other.
- Returning true when normalized lengths differ.
