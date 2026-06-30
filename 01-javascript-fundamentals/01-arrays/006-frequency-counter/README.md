# Frequency Counter

## Problem Statement

Given an array, count how many times each value appears.

## Examples

- frequencyCounter(["a", "b", "a"]) returns Map { "a" => 2, "b" => 1 }
- frequencyCounter([1, 1, 2, 3, 2, 1]) returns Map { 1 => 3, 2 => 2, 3 => 1 }
- frequencyCounter([]) returns Map {}

## Constraints

- 0 <= array.length <= 100000
- Values may be any JavaScript value
- Counts fit within JavaScript safe integers

## Worked Example

### Observation 1

A count only depends on how many times the same value has appeared.

### Observation 2

When a value appears for the first time, its previous count is zero.

### Key Insight

Counting is just repeated map updates: read old count, add one, store new count.

### High-Level Algorithm

1. Create an empty Map.
2. For each value, read its current count or use zero.
3. Store count plus one back into the map.
4. Return the map.

### Pseudocode

```text
counts = new Map()
for value of array
  counts.set(value, (counts.get(value) or 0) + 1)
return counts
```

### Implementation Tips

- Map supports arbitrary JavaScript values as keys.
- Use a clear default count for first occurrences.

## Mental Model

### Reusable Interview Pattern

Frequency map.

### When To Recognize It

Look for count, occurrences, anagram, histogram, most common, or duplicate detection.

### Similar Interview Questions

- Valid anagram
- Find majority element
- Top K frequent values

### Typical Data Structures Involved

- Map from value to count
