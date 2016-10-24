/*
Flatten a nested array. You must account for varying levels of nesting.
*/

function createCheckArray(arr) {
	"use strict";

	return arr.map(function (x) {
		return Array.isArray(x);
	});
}


function steamrollArray(arr) {
	// I'm a steamroller, baby

	var checkArr = createCheckArray(arr);
	var flattenArr = [];
	var tmpArr = [];

	while (checkArr.indexOf(true) > -1) {

		for (var i = 0; i < arr.length; i++) {

			if (Array.isArray(arr[i])) {
				tmpArr = flattenArr.concat(arr[i]);
				flattenArr = tmpArr;
			} else {
				flattenArr.push(arr[i]);
			}

		}

		arr = flattenArr;
		checkArr = createCheckArray(arr);
		flattenArr = [];

	}

	return arr;
}

console.log(steamrollArray([1, [2],
	[3, [
		[4]
	]]
]));