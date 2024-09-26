// 8 kyu
// No zeros for heros

function noBoringZeros(n) {
  let stringParams = String(n);
  while (stringParams.endsWith(0)) {
    stringParams = stringParams.slice(0, stringParams.length - 1);
  }
  return Number(stringParams);
}

console.log(noBoringZeros(45058000));
