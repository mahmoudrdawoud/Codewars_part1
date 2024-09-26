// 8 kyu
// Remove First and Last Character


function removeChar(str) {
  // let x = Array.from(str.split("").join(""));
  // x.pop();
  // x.shift();
  // return x.join("").toString();

  return str.slice(1, -1);
}

console.log(removeChar("eloquent"));