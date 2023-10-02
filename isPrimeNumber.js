function myFunction(n) {
  for (var i = 2; i < n; i++) {
    if (n % 2 === 0) {
      return `${n} is not a prime number`
      
    } else {
      return `${n} is a prime number`
    }
  }
}
console.log(myFunction(781));