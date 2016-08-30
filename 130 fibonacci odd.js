/*
Given a positive integer num, return the sum of all odd Fibonacci numbers that are less than or equal to num.

The first two numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first six numbers of the Fibonacci sequence are 1, 1, 2, 3, 5 and 8.

For example, sumFibs(10) should return 10 because all odd Fibonacci numbers less than 10 are 1, 1, 3, and 5.
*/

function fibonacci(n) {
  "use strict";

  var res = [1, 1];

  for (var i = 2; i < n; i++) {
    res.push(res[i - 2] + res[i - 1]);
  }

  return res;
}

function sumFibs(num) {
  "use strict";

  var fib = fibonacci(num);
  var res = 0;

  console.log(fib);

  for (var i = 0; fib[i] <= num; i++) {
    res += fib[i] % 2 === 1 ? fib[i] : 0;
  }

  return res;

}

console.log(sumFibs(10));
//sumFibs(4);