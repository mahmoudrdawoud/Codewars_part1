// 8 kyu
// Sum Mixed Array


function sumMix(x) {
  return x.map((ele) => Number(ele)).reduce((acc, curr) => acc + curr, 0);
}

console.log(sumMix([9, 3, "7", "3"]));