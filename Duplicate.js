function myFunction(a) {
  let len = a.length
  let b = []
  for (let i = 0; i < len; i++) {
    if (b.indexOf(a[i]) === -1) {
      b.push(a[i])
    }
  }
  return b;
}
console.log(myFunction([1, 2, 3, 3, 4, 6, 5, 8, 7, 9, 9]));