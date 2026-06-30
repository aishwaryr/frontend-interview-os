# Section 01 — JavaScript Fundamentals / Arrays

Generate ONLY this subsection.

Do not generate Strings, Objects, Map & Set, Polyfills or any other section.

---

# Target

Senior Frontend Interview Preparation

The repository should optimize for:

- Interview performance
- Pattern recognition
- Long-term retention

Use worked-example based learning.

---

# Folder Structure

Generate:

01-javascript-fundamentals/

    01-arrays/

        README.md

        001-array-chunking/

        002-flatten-nested-array/

        003-remove-duplicates/

        ...

Folder names must always follow:

NNN-kebab-case-name

Examples:

001-array-chunking

002-flatten-nested-array

003-remove-duplicates

019-unzip-arrays

Do not skip numbers.

---

# Subsection README

Create:

01-javascript-fundamentals/

    01-arrays/

        README.md

Include:

- Why array questions matter
- Common interview patterns
- Recommended solving order
- Common mistakes
- Expected interview frequency

Maximum 2 pages.

---

# Problem Folder Structure

Every problem folder must contain:

README.md

main.js

solution.js

interview-guide.md

Do not generate any other files inside a problem folder unless explicitly requested.

---

# main.js

Generate a learner practice file.

Include:

- One empty function declaration using the same function name used in the README examples
- Six `console.log(...)` test calls
- The first three calls must match the README examples
- The last three calls should cover useful edge cases
- Each call must include the expected result in a trailing comment

Example:

```js
function removeDuplicates() {}

console.log(removeDuplicates([1, 2, 1, 3, 2])) // returns [1, 2, 3]
console.log(removeDuplicates(["a", "a", "b"])) // returns ["a", "b"]
console.log(removeDuplicates([])) // returns []
console.log(removeDuplicates([1, 1, 1])) // returns [1]
console.log(removeDuplicates([true, false, true])) // returns [true, false]
console.log(removeDuplicates([0, -0, NaN, NaN])) // returns [0, NaN]
```

Do not implement the function.

The learner fills in the function body from scratch.

---

# README.md

This is the primary learning document.

Include these sections in order:

1. Problem Statement
2. Examples
3. Constraints
4. Worked Example
5. Mental Model

Do not include:

- Function signatures
- Starter code
- Implementation code
- Solution code

## Problem Statement

Write the interview question naturally, similar to how an interviewer would describe it.

Do not explain the solution in this section.

## Examples

Provide several representative examples.

These examples must use the same function name that appears in `main.js`.

## Constraints

List realistic interview constraints.

## Worked Example

This is the most important part.

Never begin with code.

Use this structure:

- Observation 1
- Observation 2
- Key Insight
- High-Level Algorithm
- Pseudocode
- Implementation Tips

The learner should understand WHY before HOW.

Minimize cognitive load.

## Mental Model

Explain:

- The reusable interview pattern
- When to recognize it
- Similar interview questions
- Typical data structures involved

---

# interview-guide.md

Merge all supporting material into this file.

Include these sections:

## Hints

Provide five progressive hints.

Do not reveal the solution immediately.

## Complexity

Explain:

- Time Complexity
- Space Complexity
- Tradeoffs

## Interview Follow-ups

Generate realistic interview follow-up questions.

Examples:

- Can this be done in-place?
- Can memory usage be reduced?
- How would this scale?
- How would you handle duplicates?
- What edge cases should be considered?

## Variants

Include:

- Easier variation
- Medium variation
- Hard variation
- Real interview variation

## Common Mistakes

List common implementation mistakes candidates make.

The goal is to help prevent interview mistakes.

---

# solution.js

Generate the complete reference solution.

Requirements:

- Modern JavaScript (ES2023+)
- Interview quality
- Readable
- Minimal comments

---

# Problems

## P0

001 Array Chunking

002 Flatten Nested Array

003 Remove Duplicates

004 Two Sum

005 Group By

006 Frequency Counter

007 Sort Objects by Single Field

008 Sort Objects by Multiple Fields

009 Array Intersection

010 Array Difference

011 Merge Intervals

---

## P1

012 Rotate Array

013 Move Zeroes

014 Partition Array

015 Merge Two Sorted Arrays

016 Flatten Array to Specific Depth

017 Cartesian Product

018 Zip Two Arrays

019 Unzip Arrays

---

# Naming Rules

Folders must use:

NNN-kebab-case

Examples:

001-array-chunking

002-flatten-nested-array

003-remove-duplicates

...

README files use:

README.md

All JavaScript files use:

main.js

solution.js

---

# Important Rules

Do not invent additional problems.

Do not omit any listed problem.

Do not change numbering.

Do not change folder names.

For all future problem folders generated under `01-javascript-fundamentals`, use this exact four-file structure and `main.js` starter-test pattern unless explicitly instructed otherwise.

If any requirement is ambiguous,

STOP

and ask for clarification instead of guessing.
