// 8 kyu
// Remove exclamation marks




function removeExclamationMarks(s) {
  return s
    .split("")
    .filter((e) => e !== "!")
    .join("");
}

console.log(removeExclamationMarks("Hello World!"));