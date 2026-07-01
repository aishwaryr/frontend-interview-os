# Remove Duplicate Characters

## Problem Statement

Given a string, return a new string with duplicate characters removed. Keep the first occurrence of each character and preserve the original order.

## Examples

```js
removeDuplicateCharacters("banana");
// returns "ban"
removeDuplicateCharacters("mississippi");
// returns "misp"
removeDuplicateCharacters("");
// returns ""
```

## Constraints

- Character comparison is case-sensitive.
- Spaces and punctuation count as characters.
- Preserve the first occurrence order.
- Return a string.

## Worked Example

### Observation 1

Each character should be emitted only the first time it appears.

### Observation 2

Preserving order means scanning left to right.

### Key Insight

Use a Set for seen characters and append only unseen characters to the result.

### High-Level Algorithm

1. Create an empty Set.
2. Create an empty result array.
3. Scan the string from left to right.
4. If the character has not been seen, mark it seen and append it.
5. Join and return the result.

### Pseudocode

```text
seen = new Set()
result = []
for char in string
  if char not in seen
    seen.add(char)
    result.push(char)
return result joined as string
```

### Implementation Tips

- Do not sort because order matters.
- Use an array for efficient output building.
- Clarify whether case-sensitive behavior is expected.

## Mental Model

### Reusable Interview Pattern

Seen-set filtering.

### When To Recognize It

Use this when the prompt asks for unique items while preserving first-seen order.

### Similar Questions

- Remove duplicate values from an array
- Deduplicate tags
- Return unique characters in order

### Common Data Structures Involved

- Set
- Result array

## Interview Guide

### Hints

1. You need to know whether a character appeared before.
2. The first occurrence should be kept.
3. A Set gives fast membership checks.
4. Append only unseen characters.
5. Join the kept characters at the end.

### Complexity

Time complexity is O(n). Space complexity is O(k), where k is the number of unique characters. A nested includes check can look simple but may become O(n²).

### Interview Follow-ups

- Should case be ignored?
- Should spaces be removed or counted?
- Can this be done in-place for a character array?
- How would you deduplicate by normalized characters?

### Variants

- Easier variation: Return whether a string has duplicates.
- Medium variation: Remove duplicates while preserving order.
- Hard variation: Remove duplicates case-insensitively while preserving original casing.
- Real interview variation: Deduplicate typed shortcut characters.

### Common Mistakes

- Sorting and changing order.
- Using a result string with repeated `includes` checks.
- Treating uppercase and lowercase as the same without being asked.
- Forgetting that spaces are characters.
