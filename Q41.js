// 8 kyu
// Get the mean of an array

function getAverage(marks) {
  return Math.floor(marks.reduce((acc, num) => acc + num, 0) / marks.length);
}

console.log(getAverage([100, 90, 60, 80, 55, 44, 88]));
