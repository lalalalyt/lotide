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

const head = (input) => {
    return input[0]
}

// TEST CODE
assertEqual(head([5, 6, 7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
