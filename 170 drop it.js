/*
Drop the elements of an array (first argument), starting from the front, until the predicate (second argument) returns true.

The second argument, func, is a function you'll use to test the first elements of the array to decide if you should drop it or not.

Return the rest of the array, otherwise return an empty array.
*/


function dropElements(arr, func) {
	// Drop them elements.
	a = arr.map(func);

	truePos = a.indexOf(true);

	if (truePos == -1) {
		return [];
	} else {

		return arr.slice(truePos, arr.length);
	}
}

console.log(dropElements([1, 2, 3], function (n) {
	return n > 4;
}));