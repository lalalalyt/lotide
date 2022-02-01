const letterPositions = function (sentence) {
  const results = {};
  for (let i = 0; i < sentence.length; i++) {
    if (!results[sentence[i]]) {
      results[sentence[i]] = [i];
    } else {
      results[sentence[i]].push(i);
    }
  }
  return results;
};

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
assertArraysEqual(letterPositions("hello").l, [2, 3]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]); // => should PASS
assertArraysEqual(letterPositions("lighthouse in the house").e, [9, 16, 22]); // => should PASS
