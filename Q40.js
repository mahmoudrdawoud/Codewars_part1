// 8 kyu 
// Vowel remover


function shortcut(string) {
  let result = [];
  let vowels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < string.length; i++) {
    if (!vowels.includes(string[i])) {
      result.push(string[i]);
    }
  }

  return result.join("");
}

console.log(shortcut("hello"));