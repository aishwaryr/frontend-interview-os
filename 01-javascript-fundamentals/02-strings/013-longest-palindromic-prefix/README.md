# Longest Palindromic Prefix

## Problem Statement

Given a string, return the longest prefix of the string that is also a palindrome.

## Examples

```js
longestPalindromicPrefix("levelheaded");
// returns "level"
longestPalindromicPrefix("aacecaaa");
// returns "aacecaa"
longestPalindromicPrefix("abcd");
// returns "a"
```

## Constraints

- The input may be empty.
- Matching is case-sensitive.
- The answer must start at index 0.
- Return a string.

## Worked Example

### Observation 1

The answer must be a prefix, not any palindrome inside the string.

### Observation 2

If the longest candidate fails, the next candidate is the prefix with one fewer character.

### Key Insight

Check prefixes from longest to shortest and return the first palindrome found.

### High-Level Algorithm

1. Start with the full string length.
2. Take the prefix ending at that length.
3. Check whether the prefix is a palindrome.
4. If it is, return it.
5. Otherwise shorten the prefix and repeat.

### Pseudocode

```text
for end from string.length down to 1
  prefix = string.slice(0, end)
  if prefix is palindrome: return prefix
return ""
```

### Implementation Tips

- Use a helper for palindrome checking.
- The first successful prefix is the longest because you scan downward.
- Empty input should return an empty string.

## Mental Model

### Reusable Interview Pattern

Candidate shrinking with a predicate check.

### When To Recognize It

Use this when the answer must be the longest prefix or suffix satisfying a condition.

### Similar Questions

- Longest common prefix
- Shortest palindrome by adding characters
- Longest valid prefix

### Common Data Structures Involved

- Prefix slicing
- Two-pointer palindrome helper

## Interview Guide

### Hints

1. The palindrome has to start at the beginning.
2. Try the longest possible prefix first.
3. If it fails, shorten by one.
4. Use two pointers to test a prefix.
5. Return as soon as a prefix passes.

### Complexity

Time complexity is O(n²) for the straightforward approach because each prefix can require a scan. Space complexity is O(n) if slicing creates prefix strings. More advanced string algorithms can improve this, but the direct approach is interview-readable for fundamentals.

### Interview Follow-ups

- Can this be optimized with KMP?
- How would you avoid allocating each prefix?
- Should comparison ignore case?
- How does this relate to shortest-palindrome problems?

### Variants

- Easier variation: Check whether the whole string is a palindrome.
- Medium variation: Return the longest palindromic prefix.
- Hard variation: Compute it in linear time.
- Real interview variation: Find the longest symmetric prefix in a generated ID.

### Common Mistakes

- Returning a palindrome substring that is not a prefix.
- Scanning from shortest to longest and returning too early.
- Forgetting the empty string case.
- Reversing the whole string for every candidate unnecessarily.
