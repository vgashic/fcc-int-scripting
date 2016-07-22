/*
Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. In other words, return the symmetric difference of the two arrays.
*/

function countVal(arr, val) {

	return arr.filter(function(a) {
		return a == val;
	}).length;

}


function diffArray(arr1, arr2) {
	"use strict";

	var concArr = arr1.concat(arr2);

	var diffArr = concArr.filter(function(a) {
		return countVal(concArr, a) == 1;
	})


	return diffArr;
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
