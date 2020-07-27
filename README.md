# Purpose

The goal of this repo is to implement and play around several different algorithms and paradigms proposed on [How Javascript Works](http://howjavascriptworks.com/), a book written by Douglas Crockford


## How to run and test
Most examples will be attempted to be done in a simple manner, meaning that `node index.js` would be enough to run, otherwise told in the `readme` files in the respective folders.

## Principles
The following chapters deserve a more detailed analysis, they are:

- Chapter 7: How Arrays Work
  - The `sort()` method of `Array` has some drawbacks:
    - It mutates the original array (impure), making it impossible to sort frozen arrays and not safe for shared arrays
    - The default comparison wants to arrange values as **strings**, even in situations where the `Array` only has **numbers**
    - Its `sort()` method is not **stable** (elements whose comparison result is equalish maintain their original relative order)
  - There is an implementation and analysis of the proposed comparison function to overcome the stability issue on the folder dedicated to this chapter
