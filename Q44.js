// 8 kyu
// Find the position!

function position(letter) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${alphabet.indexOf(letter) + 1}`;
}

console.log(position("z"));
