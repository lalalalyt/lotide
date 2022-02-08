// FUNCTION IMPLEMENTATION
const assertEqual = function (actual, expected) {
  let text;
  if (actual === expected) {
    text = "💚💚💚Assertion Passed: " + actual + " === " + expected;
    console.log(text);
  } else {
    text = "🧡🧡🧡Assertion Failed: " + actual + " !== " + expected;
    console.log(text);
  }
};

const tail = (input) => {
  const tail = [];
  for (let i = 1; i < input.length; i++) {
    tail.push(input[i]);
  }
  console.log(tail);
};

module.exports = tail

