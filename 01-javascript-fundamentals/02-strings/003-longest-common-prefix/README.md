# Longest Common Prefix

## Problem Statement

Given an array of strings, return the longest prefix shared by every string. If there is no shared prefix, return an empty string.

## Examples

```js
longestCommonPrefix(["flower", "flow", "flight"]);
// returns "fl"
longestCommonPrefix(["dog", "racecar", "car"]);
// returns ""
longestCommonPrefix(["interview", "internet", "internal"]);
// returns "inte"
```

## Constraints

- The input array may be empty.
- Strings may be empty.
- Matching is case-sensitive.
- Return a string.

## Worked Example

### Observation 1

The common prefix cannot be longer than the shortest string.

### Observation 2

The first mismatch at any position ends the prefix for all strings.

### Key Insight

Use the first string as a candidate prefix and shrink it until every string starts with it.

### High-Level Algorithm

1. Return an empty string for an empty input array.
2. Start with the first string as the prefix.
3. Compare the prefix with each remaining string.
4. While a string does not start with the prefix, remove the last prefix character.
5. Return the final prefix.

### Pseudocode

```text
prefix = first string
for each other string
  while string does not start with prefix
    remove last character from prefix
    if prefix is empty: return ""
return prefix
```

### Implementation Tips

- `startsWith` keeps the intent clear.
- Stop immediately when the prefix becomes empty.
- Avoid comparing every possible prefix from scratch.

## Mental Model

### Reusable Interview Pattern

Prefix shrinking.

### When To Recognize It

Use this when all items must share the same beginning.

### Similar Questions

- Longest shared path prefix
- Autocomplete prefix matching
- Common URL base path

### Common Data Structures Involved

- Candidate string
- Array scan

## Interview Guide

### Hints

1. The answer is a prefix of every string.
2. The first string can be your starting candidate.
3. If a string does not match, shorten the candidate.
4. Once the candidate is empty, no prefix exists.
5. Use `startsWith` or compare characters by index.

### Complexity

Time complexity is O(n * m), where n is the number of strings and m is the prefix length checked. Space complexity is O(1) apart from the returned string. A vertical character scan is another good approach with similar complexity.

### Interview Follow-ups

- How would you solve this with a trie?
- What if there are millions of strings?
- How should case-insensitive matching work?
- Can this be streamed?

### Variants

- Easier variation: Compare only two strings.
- Medium variation: Find the common prefix across an array.
- Hard variation: Find common prefixes for many queries with a trie.
- Real interview variation: Find the shared folder prefix for selected files.

### Common Mistakes

- Not handling an empty input array.
- Returning the first string without checking all strings.
- Confusing prefix with substring.
- Ignoring empty strings inside the array.
