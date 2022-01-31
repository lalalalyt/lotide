// ACTUAL FUNCTION
const countOnly = (allItems, itemsToCount) => {
  const output = {};
  for (let item in itemsToCount) {
    if (itemsToCount[item]) {
      let count = 0;
      for (let name of allItems) {
        if (name === item) {
          count += 1;
        }
      }
      if (count) {
        output[item] = count;
      }
    }
  }
  return output;
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
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, {
  Jason: true,
  Karima: true,
  Fang: true,
  Agouhanna: false,
});

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

console.log(result1);
