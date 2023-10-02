function fizzBuzz(n) {

  for (let i = 1; i <= n; i++) {
    if (n % 3 === 0 && n % 5 === 0) {
      return (`${n} is the FizzBuzz`);
    } else if (n % 3 === 0) {
      return (`${n} is the Fizz`);
    } else if (n % 5 === 0) {
      return (`${n} is the Buzz`);
    }
  }
  return n;
}
console.log(fizzBuzz(4));