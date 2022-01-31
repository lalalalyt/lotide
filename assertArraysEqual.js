// FUNCTION IMPLEMENTATION
const assertEqual = function (array1, array2) {
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
assertEqual([1, 2, 3], [1, 2, 3]); // => should PASS
assertEqual([1, 2, 3, 5], [1, 2, 3]); // => should FAIL
assertEqual([1, 3, 2], [1, 2, 3]); // => should FAIL
