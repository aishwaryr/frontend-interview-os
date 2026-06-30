# Merge Intervals

## Problem Statement

Given an array of intervals [start, end], merge all overlapping intervals and return the condensed list sorted by start.

## Examples

- mergeIntervals([[1, 3], [2, 6], [8, 10]]) returns [[1, 6], [8, 10]]
- mergeIntervals([[1, 4], [4, 5]]) returns [[1, 5]]
- mergeIntervals([]) returns []

## Constraints

- 0 <= intervals.length <= 100000
- Each interval is [start, end] with start <= end
- Intervals may be unsorted

## Worked Example

### Observation 1

Overlaps are easiest to detect when intervals are ordered by start.

### Observation 2

A new interval can only overlap the last merged interval after sorting.

### Key Insight

Sort first, then maintain a merged list whose last interval is the only active candidate.

### High-Level Algorithm

1. Return an empty array for empty input.
2. Copy and sort intervals by start.
3. Seed the merged list with the first interval.
4. For each next interval, compare its start with the last merged end.
5. Merge by extending the end, or append a new interval if separate.

### Pseudocode

```text
sorted = copy intervals sorted by start
merged = [first sorted interval copy]
for interval of remaining sorted
  last = merged last
  if interval.start <= last.end: last.end = max(last.end, interval.end)
  else: merged.push(copy interval)
return merged
```

### Implementation Tips

- Copy intervals so the input is not mutated.
- Touching intervals such as [1, 4] and [4, 5] count as overlapping here.

## Mental Model

### Reusable Interview Pattern

Sort then sweep.

### When To Recognize It

Look for intervals, ranges, calendar blocks, overlaps, merge, or union of ranges.

### Similar Interview Questions

- Meeting room availability
- Insert interval
- Merge date ranges

### Typical Data Structures Involved

- Sorted array
- Merged result array
