# Sort Objects by Multiple Fields

## Problem Statement

Given an array of objects and ordered sort criteria, return a new array sorted by the first field, breaking ties with later fields.

## Examples

- Sort [{ a: 1, b: 2 }, { a: 1, b: 1 }] by a then b to get b:1 before b:2
- Sort by score descending to place higher scores first
- Sorting an empty list returns []

## Constraints

- 0 <= items.length <= 100000
- Each criterion has a field and optional direction of asc or desc
- Do not mutate the input array

## Worked Example

### Observation 1

Later criteria matter only when all earlier criteria are equal.

### Observation 2

A comparator can return as soon as it finds a non-zero comparison.

### Key Insight

Multi-field sorting is a chain of comparators evaluated in priority order.

### High-Level Algorithm

1. Copy the input array.
2. Sort with a comparator that loops over criteria.
3. For each criterion, compare the two field values.
4. If they differ, return the comparison adjusted for direction.
5. If all fields tie, return zero.

### Pseudocode

```text
copy = shallow copy of items
copy.sort((a, b) =>
  for criterion of fields
    compare a[field] with b[field]
    if different: return ordered result
  return 0
)
```

### Implementation Tips

- Keep criteria order exactly as provided.
- Default missing direction to ascending.

## Mental Model

### Reusable Interview Pattern

Lexicographic comparator.

### When To Recognize It

Look for sort by last name then first name, priority ordering, tie-breaker, or multi-column sorting.

### Similar Interview Questions

- Sort contacts by last then first name
- Sort leaderboard by score then time
- Sort table rows by multiple columns

### Typical Data Structures Involved

- Array of criteria
- Comparator loop
