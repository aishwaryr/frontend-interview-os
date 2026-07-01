# Is Rotation Of Another String

## Problem Statement

Given two strings, determine whether the second string is a rotation of the first string.

## Examples

```js
isRotationOfAnotherString("waterbottle", "erbottlewat");
// returns true
isRotationOfAnotherString("hello", "llohe");
// returns true
isRotationOfAnotherString("hello", "olelh");
// returns false
```

## Constraints

- Both inputs may be empty.
- Matching is case-sensitive.
- Rotation preserves all characters and length.
- Return a boolean.

## Worked Example

### Observation 1

A rotation must have the same length as the original string.

### Observation 2

Every valid rotation appears inside the original string concatenated with itself.

### Key Insight

Check length first, then test whether the target string is a substring of the doubled original string.

### High-Level Algorithm

1. If the lengths differ, return false.
2. Concatenate the first string with itself.
3. Check whether the second string appears in that doubled string.
4. Return the result.

### Pseudocode

```text
if first.length != second.length: return false
doubled = first + first
return doubled contains second
```

### Implementation Tips

- The empty string is a rotation of the empty string.
- Length check prevents false positives.
- `includes` expresses the substring check clearly.

## Mental Model

### Reusable Interview Pattern

String doubling for rotation checks.

### When To Recognize It

Use this when a string can wrap around from the end back to the start.

### Similar Questions

- Check rotated arrays
- Detect cyclic shifts
- Validate circular buffer order

### Common Data Structures Involved

- Concatenated string
- Substring search

## Interview Guide

### Hints

1. A rotation cannot change length.
2. Imagine cutting the string in one place and swapping the pieces.
3. The swapped version appears in the original repeated twice.
4. Build `first + first`.
5. Check whether the second string is included.

### Complexity

Time complexity is O(n) on average for modern substring search. Space complexity is O(n) for the doubled string. The tradeoff is extra memory for a very simple and reliable check.

### Interview Follow-ups

- Can you avoid creating the doubled string?
- How would you find the rotation offset?
- How would this work for arrays?
- Should case-insensitive rotation be supported?

### Variants

- Easier variation: Check if two strings have the same length.
- Medium variation: Check string rotation with doubling.
- Hard variation: Find all rotation offsets for repeated patterns.
- Real interview variation: Validate whether a carousel order was rotated.

### Common Mistakes

- Forgetting the length check.
- Checking only prefixes and suffixes manually.
- Treating reversed strings as rotations.
- Mishandling two empty strings.
