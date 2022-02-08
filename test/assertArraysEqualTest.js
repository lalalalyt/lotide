const assertArraysEqual = require ('../assertArraysEqual')

// TEST CODE
assertArraysEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertArraysEqual([1, 2, 3, 5], [1, 2, 3]); // => should FAIL
assertArraysEqual([1, 3, 2], [1, 2, 3]); // => should FAIL