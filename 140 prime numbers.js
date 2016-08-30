/*
Sum all the prime numbers up to and including the provided number.

A prime number is defined as a number greater than one and having only two divisors, one and itself. For example, 2 is a prime number because it's only divisible by one and two.

The provided number may not be a prime.
*/

function isPrime(x) {
  "use strict";

  if (x <= 1) {
    return false;
  }

  if (x == 2 || x == 3) {
    return true;
  }

  if (x % 2 === 0 || x % 3 === 0) {
    return false;
  }

  var i = 5;

  while (i * i <= x) {
    if (x % i === 0 || x % (i + 2) === 0) {
      return false;
    }
    i += 6;
  }

  return true;

}



function sumPrimes(num) {
  var res = 0;

  for (var i = 1; i <= num; i++) {
    res += isPrime(i) ? i : 0;
  }

  return res;
}

console.log(sumPrimes(10));

//console.log(isPrime(1));