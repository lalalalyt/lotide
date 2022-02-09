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
module.exports = flatten

// test
console.log(flatten([1,3,[4,2]]))
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
