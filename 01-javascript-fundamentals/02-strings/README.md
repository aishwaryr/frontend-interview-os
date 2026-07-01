# JavaScript Fundamentals: Strings

## Why string problems matter

String questions are common because frontend code constantly parses, validates, formats, searches, normalizes, and displays text. They test whether you can manage indexes, character counts, normalization rules, and edge cases without losing track of the original requirement.

## Common interview patterns

- Frequency maps for anagrams, uniqueness, duplicates, and counts
- Two pointers for palindrome checks and character comparisons
- Prefix scanning for shared starts and palindromic prefixes
- Sliding or repeated scans for compression and encoding
- Normalization before comparison when case, spaces, or punctuation should be ignored
- Splitting and joining words for sentence transformations

## Recommended solving order

1. Start with 001-005 to build confidence with counts, prefixes, palindromes, and first-pass scans.
2. Continue with 006-009 to practice formatting and word-level transformations.
3. Move to 010-012 for practical parsing, deduplication, and rotation checks.
4. Finish with 013-014 for prefix reasoning and run-based encoding.

## Common mistakes

- Forgetting to clarify case sensitivity and whitespace handling
- Comparing sorted strings when a frequency map would be clearer
- Using nested loops for repeated character lookups
- Mishandling empty strings and one-character strings
- Losing punctuation or spacing when the prompt requires preserving it
- Returning the last valid answer instead of the first one requested

## Expected interview frequency

String problems are high frequency in frontend interviews. They often appear as direct coding prompts and as practical UI tasks such as title formatting, search normalization, slug handling, input validation, and text summarization.
