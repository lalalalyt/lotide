// ACTUAL FUNCTION
const findKeyByValue = (genre, movie) => {
  for (let type in genre) {
    if (genre[type] === movie) {
      // we can use includes function
      return type;
    }
  }
};

// TEST FUNCTION
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
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire",
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
