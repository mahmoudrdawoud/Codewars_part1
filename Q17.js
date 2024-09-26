// 8 kyu
// How good are you really?


function betterThanAverage(classPoints, yourPoints) {
  return (
    yourPoints >
    classPoints.reduce((curr, acc) => curr + acc, 0) / classPoints.length
  );
}

console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75));