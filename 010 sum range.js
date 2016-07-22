/*
We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

The lowest number will not always come first.
*/

function sumAll(arr) {
	"use strict";

	if (arr.length == 2) {

		var sum = 0;

		arr.sort(function(a, b) {
			return a - b;
		});

		for (var i = arr[0]; i <= arr[1]; i++) {
			sum += i;
		}

		return sum;

	} else {
		return "Invalid array length.";
	}
}


console.log(sumAll([1, 4]));
console.log(sumAll([4, 1]));