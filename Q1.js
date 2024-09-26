// 8 kyu
// Hello, Name or World!


function hello(name) {
  return name
    ? `Hello, ${name.charAt(0).toUpperCase()}${name.slice(1).toLowerCase()}!`
    : "Hello, World!";
}

console.log(hello("mahmoud"));