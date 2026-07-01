# Palindrome Check

## Problem Statement

Given a string, determine whether it reads the same forward and backward. Ignore case and non-alphanumeric characters.

## Examples

```js
palindromeCheck("racecar");
// returns true
palindromeCheck("A man, a plan, a canal: Panama");
// returns true
palindromeCheck("hello");
// returns false
```

## Constraints

- The input may contain letters, numbers, spaces, and punctuation.
- Comparison should be case-insensitive.
- Non-alphanumeric characters should be ignored.
- Return a boolean.

## Worked Example

### Observation 1

Only the meaningful normalized characters affect the answer.

### Observation 2

The first and last remaining characters must match, then the next pair must match, and so on.

### Key Insight

Normalize the string, then use two pointers moving inward.

### High-Level Algorithm

1. Lowercase the string and remove non-alphanumeric characters.
2. Set one pointer at the start and one at the end.
3. Compare the characters at both pointers.
4. If they differ, return false.
5. Move inward until the pointers meet, then return true.

### Pseudocode

```text
normalized = clean string
left = 0
right = normalized.length - 1
while left < right
  if normalized[left] != normalized[right]: return false
  left++
  right--
return true
```

### Implementation Tips

- Normalization makes the pointer loop simple.
- Empty and one-character normalized strings are palindromes.
- Use a regular expression to remove punctuation.

## Mental Model

### Reusable Interview Pattern

Two-pointer mirror comparison.

### When To Recognize It

Use this when a string must be symmetric from both ends.

### Similar Questions

- Valid palindrome
- Check if an array is symmetric
- Palindrome linked list

### Common Data Structures Involved

- Two indexes
- Normalized string

## Interview Guide

### Hints

1. Decide what characters should count.
2. Normalize before comparing.
3. Compare the outermost characters first.
4. Move both pointers inward after a match.
5. One mismatch is enough to return false.

### Complexity

Time complexity is O(n). Space complexity is O(n) for the normalized string. You can reduce extra space by skipping non-alphanumeric characters in-place with two pointers.

### Interview Follow-ups

- Can this be done without building a normalized string?
- How would you handle Unicode letters?
- Should numbers count as valid characters?
- How would you return the mismatching positions?

### Variants

- Easier variation: Check a lowercase word with no punctuation.
- Medium variation: Ignore punctuation and case.
- Hard variation: Allow removing one character to make a palindrome.
- Real interview variation: Validate user-entered coupon codes that should be symmetric.

### Common Mistakes

- Forgetting to lowercase.
- Comparing punctuation.
- Using reverse without considering normalization.
- Mishandling empty strings.
