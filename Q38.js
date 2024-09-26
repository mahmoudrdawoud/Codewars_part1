// 8 kyu
// Is it a palindrome?



function isPalindrome(x) {
  return x.toLowerCase() == x.toLowerCase().split("").reverse().join("");
}
console.log(isPalindrome("hello"));