const middle = require("../middle")
const assert = require("chai").assert


// // TEST CODE
// assertArraysEqual(middle([1]), []); 
// assertArraysEqual(middle([1,2]), []); 
// assertArraysEqual(middle([1, 2, 3]), [2]); 
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); 
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]); 
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]); 

describe("#middle",()=>{
it ("return empty array if enter [1]", ()=>{
  assert.deepEqual(middle([1]), [])
})

it ("return empty array if enter [1, 2]", ()=>{
  assert.deepEqual(middle([1, 2]), [])
})

it ("return [2] if enter [1, 2, 3]", ()=>{
  assert.deepEqual(middle([1, 2, 3]), [2])
})

it ("return [3] if enter [1, 2, 3, 4, 5]", ()=>{
  assert.deepEqual(middle([1, 2, 3, 4, 5]), [3])
})

it ("return [2, 3] if enter [1, 2, 3, 4]", ()=>{
  assert.deepEqual(middle([1, 2, 3, 4]), [2, 3])
})

it ("return [3, 4] if enter [1, 2, 3, 4, 5, 6]", ()=>{
  assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
})

})
