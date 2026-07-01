# First Non-Repeating Character

## Problem Statement

Given a string, return the first character that appears exactly once. If every character repeats, return null.

## Examples

```js
firstNonRepeatingCharacter("leetcode");
// returns "l"
firstNonRepeatingCharacter("loveleetcode");
// returns "v"
firstNonRepeatingCharacter("aabb");
// returns null
```

## Constraints

- The input may be empty.
- Character comparison is case-sensitive.
- Spaces and punctuation count as characters if present.
- Return the character itself, or null when none exists.

## Worked Example

### Observation 1

You cannot know whether a character is unique until you know its total count.

### Observation 2

The answer must be the earliest character whose count is one.

### Key Insight

Make one pass to count characters, then a second pass to preserve original order.

### High-Level Algorithm

1. Count every character in the string.
2. Scan the original string from left to right.
3. Return the first character with count one.
4. If no such character exists, return null.

### Pseudocode

```text
counts = new Map()
for char in string
  increment counts[char]
for char in string
  if counts[char] is 1: return char
return null
```

### Implementation Tips

- Use the original string for the second pass.
- Do not sort, because sorting destroys position.
- A Map keeps the code predictable for any character.

## Mental Model

### Reusable Interview Pattern

Frequency map plus order-preserving scan.

### When To Recognize It

Use this when the prompt asks for the first unique, first duplicate, or earliest item with a frequency condition.

### Similar Questions

- First unique number in an array
- First recurring character
- Find the first non-duplicate event ID

### Common Data Structures Involved

- Map from character to count
- Original string traversal

## Interview Guide

### Hints

1. You need to know how often each character appears.
2. The first pass can collect counts.
3. The second pass should use the original order.
4. Return as soon as a count of one is found.
5. If the second pass finishes, return null.

### Complexity

Time complexity is O(n) because the string is scanned twice. Space complexity is O(k), where k is the number of distinct characters. A nested-loop approach uses less explicit memory but becomes O(n²).

### Interview Follow-ups

- How would you ignore case?
- How would you handle a stream of characters?
- Can this be solved in one pass if the alphabet is fixed?
- What should happen for Unicode grapheme clusters?

### Variants

- Easier variation: Return whether any unique character exists.
- Medium variation: Return the first non-repeating character.
- Hard variation: Process characters from a stream.
- Real interview variation: Find the first unique typed shortcut key.

### Common Mistakes

- Returning the first character before seeing the whole string.
- Sorting and losing original order.
- Returning an index when a character was requested.
- Treating uppercase and lowercase as the same without being asked.
