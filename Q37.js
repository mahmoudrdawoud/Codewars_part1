// 8 kyu
// Grasshopper - Summation



var summation = function (num) {
  return Array(num)
    .fill(true)
    .reduce((acc, curr, index) => acc + index + 1, 0);
};

console.log(summation(10));