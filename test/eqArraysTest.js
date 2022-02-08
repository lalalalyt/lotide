const eqArrays = require('../eqArrays')
const assertEqual = require ('../assertEqual')

// TEST CODE
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS
assertEqual(eqArrays([1, 2, 3, 5], [1, 2, 3]), true); // => should FAIL
assertEqual(eqArrays([1, 3, 2], [1, 2, 3]), true); // => should FAIL
