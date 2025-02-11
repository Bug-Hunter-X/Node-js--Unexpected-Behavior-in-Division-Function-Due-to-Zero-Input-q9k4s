# Node.js: Zero Division Handling Bug

This repository demonstrates a common error in Node.js: incorrect handling of zero values in division operations.  The `bug.js` file contains a function that fails to properly validate inputs before performing division, potentially leading to unexpected behavior such as `Infinity` results, `NaN`, or crashes.

The solution is provided in `bugSolution.js` which implements proper input validation to prevent these errors. 

## Bug Description

The original function `myFunction` does not check for zero values before performing the division. If either `a` or `b` is zero, the result will be incorrect. This can lead to unpredictable behavior in your Node.js application.

## Solution

The solution involves adding input validation to explicitly check for zero values and handle them appropriately (either by returning an error, default value, or preventing the division altogether).