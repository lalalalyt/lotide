const assertObjectsEqual = function (object1, object2) {
  const inspect = require("util").inspect;
  let text;
  if (eqObjects(object1, object2)) {
    text = `💚💚💚Assertion Passed ${inspect(object1)} === ${inspect(object2)}`;
    console.log(text);
  } else {
    text = `🧡🧡🧡Assertion Failed ${inspect(object1)} !== ${inspect(object2)}`;
    console.log(text);
  }
};

/*
// Primitives as values
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (object1[key]!==object2[key]) {
      return false;
    }
  }
  return true
};

// TEST CODE
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true
assertEqual(eqObjects(ab, ba),true)

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false
assertEqual(eqObjects(ab, abc),false)
*/

// Arrays as values
const eqObjects = function (object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) {
    return false;
  }
  for (let key of Object.keys(object1)) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      return eqArrays(object1[key], object2[key]);
    }
    if (typeof object1[key] === "number") {
      if (object1[key] !== object2[key]) {
        return false;
      } else {
        return true;
      }
    }
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
const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true
assertObjectsEqual(cd, dc); // => pass

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false
assertObjectsEqual(cd, cd2); // => fail
