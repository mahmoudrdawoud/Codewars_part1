// 8 kyu
// Square(n) Sum


function squareSum(numbers) {
  //   let arr = [];
  //   let result = 0;
  //    numbers.map((ele) => {

  //   arr.push(ele ** 2);
  //   });

  //    arr.map((ele) => {
  //     return (result += ele);
  //   });

  //   return result;

  return numbers.map((ele) => ele * ele).reduce((acc, curr) => acc + curr, 0);
}

console.log(squareSum([1, 2, 2]));