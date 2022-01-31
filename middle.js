// test functions
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

//actual function
const middle = (array) => {
  let length = array.length;
  let middle = Math.floor(length / 2);
  if (array.length < 3) {
    return [];
  } else if (array.length % 2 === 0) {
    return [array[middle-1],array[middle]]
  } else {
    return [array[middle]]
  }
};

// TEST CODE
assertArraysEqual(middle([1]), []); 
assertArraysEqual(middle([1,2]), []); 
assertArraysEqual(middle([1, 2, 3]), [2]); 
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); 
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 

