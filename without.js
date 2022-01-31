const without = (source, itemsToRemove) => {
  const final = [];
  for (let i = 0; i < source.length; i++) {
    let equal = true;
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (source[i] === itemsToRemove[j]) {
        equal = false;
      }
    }
    if (equal === true) {
      final.push(source[i]);
    }
  }
  console.log(final);
};

// assertArraysEqual compares arrays - used to tests
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

const eqArrays = (array1, array2) => {
  if (array1.length !== array2.length) {
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }

  return true;
};

// TEST CODE
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]


const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
