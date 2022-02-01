// ACTUAL FUNCTION
const countLetters = (input) => {
  const output = {};
  for (let letter of input) {
    if (!output[letter]) {
      output[letter] = 1;
    } else {
      output[letter] += 1;
    }
  }
  return output;
};

//TEST FUNCTION
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

// TEST CODE
assertEqual(countLetters("LHL").L, 2);
