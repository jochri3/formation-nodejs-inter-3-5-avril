function sum(arr = []) {
  return arr.reduce((acc, numbre) => acc + numbre, 0);
}

function sumV2(arr = []) {
  return arr.reduce((acc, numbre) => acc + numbre, 0);
}

function sumV3(...arr) {
  let result = 0;
  for (const number of arr) {
    result += number;
  }
  return result;
}

module.exports = {
  sum,
  sumV2,
  sumV3,
};
