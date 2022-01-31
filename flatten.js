const flatten = (input) => {
  let final = [];
  for (let i = 0; i < input.length; i++) {
    if (Array.isArray(input[i])) {
      input[i].forEach(element => final.push(element))
    } else {
      final.push(input[i]);
    }
  }
  return(final);
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

// test
console.log(flatten([1,3,[4,2]]))
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
