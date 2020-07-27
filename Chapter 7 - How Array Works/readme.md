# Implementation

To provide stability to the sort function, it's necessary to be a bit more sophisticated. The files in this folder show the implementation suggested by the author, as well as some examples using it

## How to run
Just use `node index.js` to run the tests

## Notes
- The factories `refine` and `by` allow the sorting by any level of properties (meaning that they can be nested). 
- `refine` will retrieve start from the object and keep traversing its nested properties according to the *path* input (See Test 2, for example)
- `by` takes, in order, each of the properties that should be considered for the sort to happen. In case of nested properties, separate them by a dot (See Test 3, for example).