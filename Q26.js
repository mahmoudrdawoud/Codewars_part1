// 8 kyu 
// The Feast of Many Beasts


function feast(beast, dish) {
  return (
    beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1]
  );
}

console.log(feast("brown bear", "bear claw"));