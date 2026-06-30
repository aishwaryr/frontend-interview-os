# Group By

## Problem Statement

Given an array and a key selector, group the items by key. The selector may be a function or a string property name.

## Examples

- groupBy([{ type: "a" }, { type: "b" }, { type: "a" }], "type") returns { a: [{ type: "a" }, { type: "a" }], b: [{ type: "b" }] }
- groupBy([1, 2, 3, 4], n => n % 2 === 0 ? "even" : "odd") returns { odd: [1, 3], even: [2, 4] }
- groupBy([], "type") returns {}

## Constraints

- 0 <= array.length <= 100000
- Group keys should be usable as object property keys
- Input order inside each group must be preserved

## Worked Example

### Observation 1

Each item belongs to exactly one group determined by the selector.

### Observation 2

When the group does not exist yet, it must be initialized before pushing.

### Key Insight

Grouping is a reduce-style accumulation into buckets keyed by derived values.

### High-Level Algorithm

1. Normalize the selector into a function.
2. Create an empty grouping object or map.
3. For each item, compute its key.
4. Create a bucket for the key if needed.
5. Push the item into the bucket and return the grouping.

### Pseudocode

```text
groups = object
getKey = normalized selector
for item of array
  key = getKey(item)
  if groups[key] does not exist: groups[key] = []
  groups[key].push(item)
return groups
```

### Implementation Tips

- Initialize each bucket exactly once.
- Do not overwrite an existing group when you see another item with the same key.

## Mental Model

### Reusable Interview Pattern

Bucket accumulation.

### When To Recognize It

Look for group, bucket, categorize, partition by key, or histogram-like output with arrays.

### Similar Interview Questions

- Group users by role
- Bucket events by day
- Group files by extension

### Typical Data Structures Involved

- Object or Map of arrays
