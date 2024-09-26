// 8 kyu
// Fake Binary


function fakeBin(x) {
  // return x
  //   .split("")
  //   .map((n) => (n < "5" ? "0" : "1"))
  //   .join("");

  return x.replace(/[1-4]/g, "0").replace(/[5-9]/g, "1");
}

console.log(fakeBin("123456789"));