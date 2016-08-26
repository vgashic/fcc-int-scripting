/*
Write a function that takes two or more arrays and returns a new array of unique values in the order of the original provided arrays.

In other words, all values present from all arrays should be included in their original order, but with no duplicates in the final array.

The unique numbers should be sorted by their original order, but the final array should not be sorted in numerical order.
*/

function uniteUnique(arg) {
  "use strict";

  var res = [];
  var h1 = [];
  var arr = Array.from(arguments);
  //console.log(arr);

  h1 = arr.reduce(function(a, b) {
    return a.concat(b);
  });

  res[0] = h1[0];
  for (var i = 1; i < h1.length; i++) {
    if (res.indexOf(h1[i]) != -1) {
      continue;
    } else {
      res.push(h1[i]);
    }
  }

  return res;
}

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));