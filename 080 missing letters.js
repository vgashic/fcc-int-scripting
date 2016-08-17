/*
Find the missing letter in the passed letter range and return it.

If all letters are present in the range, return undefined.
*/


function fearNotLetter(str) {
  "use strict";

  var startLetter = str.charCodeAt(0);
  var endLetter = str.charCodeAt(str.length - 1);
  var res;

  for (var i = startLetter; i <= endLetter; i++) {
    if (str[i - str.charCodeAt(0)] != String.fromCharCode(i)) {
      return String.fromCharCode(i);
    }
  }


  return res;
}

console.log(fearNotLetter("acde"));