function myFunction(str) {
  let len = str.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (str[i] != str[len - 1 - i]) {
      return(`${str} is not a Palindrome string`)
    } 
  }
  return (`${str} is Palindrome string`)
}
console.log(myFunction("madam"));




// function myFunction(str) {
//   let len = str.length;
//   let mid = Math.floor(len / 2)
//   for (i = 0; i < mid; i++) {
//     if (str[i] !== str[len - 1 - i]) {
//       return false;
//     }
//   }
//   return "It is  a palindrome"
// }
// console.log(myFunction("Madam"));


// function myFunction(str) {
//   var len = str.length;
//   for (var i = 0; i < Math.floor(len / 2); i++) {
//     if (str[i] != str[len - 1 - i]) {
//       return `${str} is not Palindrome`
//     }
//   }
//   return `${str} is a Palindrome`
// }
// console.log(myFunction("eye"));





