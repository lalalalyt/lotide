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

module.exports= middle

