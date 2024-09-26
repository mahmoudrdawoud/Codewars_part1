// 8 kyu
// Thinkful - Logic Drills: Traffic light


function updateLight(current) {
  return current === "yellow"
    ? "red"
    : current === "green"
    ? "yellow"
    : "green";
}

console.log(updateLight("green"));