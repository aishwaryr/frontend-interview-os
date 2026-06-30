# JavaScript Fundamentals: Arrays

## Why array questions matter

Array questions show whether you can turn a plain-English requirement into controlled iteration, state, and edge-case handling. They are common because arrays sit behind UI lists, API payloads, table rows, event streams, search results, and most in-memory transformations in frontend work.

Worked examples are especially useful here: the same small patterns repeat across many interview prompts, even when the story changes.

## Common interview patterns

- Two pointers for sorted arrays, compaction, and in-place movement
- Hash maps and sets for membership, counting, deduplication, and complements
- Sort then sweep for intervals and ordered comparisons
- Stack or recursion for nested arrays
- Bucketing for grouping, partitioning, and frequency counting
- Comparator design for object sorting
- Combination building for product-style outputs

## Recommended solving order

1. Start with 001-006 to build basic traversal, sets, maps, and accumulation.
2. Continue with 007-011 to practice comparators, set operations, and interval sweeps.
3. Move to 012-016 for in-place updates, two pointers, merging, and depth-limited traversal.
4. Finish with 017-019 for combination generation and index-aligned transformations.

## Common mistakes

- Mutating inputs when the prompt asks for a new array
- Allocating a new array when the prompt asks for in-place behavior
- Using nested loops where a set or map is expected
- Forgetting empty arrays, one-element arrays, duplicates, and large `k` values
- Returning values when indices are requested
- Sorting away an order requirement
- Missing the last chunk, leftover merge items, or final tail fill

## Expected interview frequency

Arrays are very high frequency. Expect at least one array-style problem in most frontend interviews, even when the prompt is framed as UI data transformation, table behavior, analytics processing, or API normalization. Mastering these patterns gives strong coverage for both coding rounds and practical frontend exercises.
