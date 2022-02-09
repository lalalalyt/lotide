// FUNCTION IMPLEMENTATION

const tail = (input) => {
  const tail = [];
  for (let i = 1; i < input.length; i++) {
    tail.push(input[i]);
  }
  return(tail);
};

module.exports = tail

