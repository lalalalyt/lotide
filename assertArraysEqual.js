const eqArrays = require ('./eqArrays')

const assertArraysEqual = function (array1, array2) {
  let text;
  if (eqArrays(array1, array2)) {
    text = "💚💚💚Assertion Passed";
    console.log(text);
  } else {
    text = "🧡🧡🧡Assertion Failed";
    console.log(text);
  }
};

module.exports = assertArraysEqual