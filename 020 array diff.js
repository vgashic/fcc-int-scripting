/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function arrDiff(a1, a2) {
	"use strict";

	return a1.filter(function (x) {
		return a2.indexOf(x) == -1;
	});
}



function diffArray(arr1, arr2) {
	"use strict";

	return arrDiff(arr1, arr2).concat(arrDiff(arr2, arr1));
}

console.log(diffArray([1, 2, 3, 5, 6], [1, 2, 3, 4, 4, 5]));