# Unzip Arrays

## Problem Statement

Given an array of two-element pairs, split it into two arrays: one containing the first values and one containing the second values.

## Examples

- unzipArrays([[1, "a"], [2, "b"]]) returns [[1, 2], ["a", "b"]]
- unzipArrays([]) returns [[], []]
- unzipArrays([[true, 1]]) returns [[true], [1]]

## Constraints

- 0 <= pairs.length <= 100000
- Each pair has exactly two positions
- Values may be any JavaScript value

## Worked Example

### Observation 1

The first output array collects index 0 from each pair.

### Observation 2

The second output array collects index 1 from each pair.

### Key Insight

Unzip is the inverse of zip for pairs: scan once and push each column into its own array.

### High-Level Algorithm

1. Create firstValues and secondValues arrays.
2. Loop over each pair.
3. Push the first item into firstValues.
4. Push the second item into secondValues.
5. Return [firstValues, secondValues].

### Pseudocode

```text
firstValues = []
secondValues = []
for [first, second] of pairs
  firstValues.push(first)
  secondValues.push(second)
return [firstValues, secondValues]
```

### Implementation Tips

- Destructuring pairs makes the intent clear.
- Return two arrays even when the input is empty.

## Mental Model

### Reusable Interview Pattern

Column extraction.

### When To Recognize It

Look for unzip, transpose pairs, split tuples, or separate paired values into columns.

### Similar Interview Questions

- Split coordinate pairs into x and y arrays
- Separate labels and values
- Transpose two-column rows

### Typical Data Structures Involved

- Two output arrays
