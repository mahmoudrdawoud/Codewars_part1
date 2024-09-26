// 8 kyu
// Add Length


function addLength(str) {
  return str.split(" ").map((element) => element + " " + element.length);
}
console.log(addLength("apple ban"));