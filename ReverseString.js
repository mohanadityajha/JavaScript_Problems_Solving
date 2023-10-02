const reverseString = str => {
  const len = str.length;
  let output = "";
  for (let i = len - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}
console.log(reverseString("Aditya Mohan"));


function reverseString(str) {
  const len = str.length;
  let output = "";
  for (let i = len - 1; i >= 0; i--) {
    output += str[i];
  }
  return output;
}
console.log(reverseString("Aditya Mohan"));