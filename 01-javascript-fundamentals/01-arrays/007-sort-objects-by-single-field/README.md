# Sort Objects by Single Field

## Problem Statement

Given an array of objects, return a new array sorted by one field in ascending or descending order.

## Examples

- sortObjectsByField([{ age: 30 }, { age: 20 }], "age") returns [{ age: 20 }, { age: 30 }]
- sortObjectsByField([{ name: "B" }, { name: "A" }], "name", "desc") returns [{ name: "B" }, { name: "A" }]
- sortObjectsByField([], "age") returns []

## Constraints

- 0 <= items.length <= 100000
- Compared values are numbers or strings
- Do not mutate the input array

## Worked Example

### Observation 1

Sorting compares two objects by extracting the same field from each.

### Observation 2

JavaScript sort mutates, so copy the array first.

### Key Insight

Separate copying from comparison: clone the outer array, then sort with a comparator based on the requested field and direction.

### High-Level Algorithm

1. Copy the input array.
2. Choose a multiplier: 1 for ascending, -1 for descending.
3. Sort the copy using the selected field.
4. Return the sorted copy.

### Pseudocode

```text
multiplier = direction is desc ? -1 : 1
copy = shallow copy of items
copy.sort(compare item[field])
return copy
```

### Implementation Tips

- Return 0 when values are equal.
- Avoid subtracting strings; use less-than and greater-than comparisons.

## Mental Model

### Reusable Interview Pattern

Comparator function.

### When To Recognize It

Look for sort by field, order by, ranking, ascending, descending, or compare objects.

### Similar Interview Questions

- Sort users by age
- Sort products by price
- Sort rows by column

### Typical Data Structures Involved

- Copied array
- Comparator function
