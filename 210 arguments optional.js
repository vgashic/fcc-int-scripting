/*
Create a function that sums two arguments together. If only one argument is provided, then return a function that expects one argument and returns the sum.

For example, addTogether(2, 3) should return 5, and addTogether(2) should return a function.

Calling this returned function with a single argument will then return the sum:

var sumTwoAnd = addTogether(2);

sumTwoAnd(3) returns 5.

If either argument isn't a valid number, return undefined.
*/

/**
 * Check if passed parameter is number
 *
 * @param {any} toCheck
 * @returns boolean
 */
function checkIfNum(toCheck) {
	return typeof (toCheck) === "number";
}


function addTogether() {

	if (arguments.length > 1) {
		// if there are 2 or more parameters
		// ignore all after second parameter
		console.log(arguments);
		// first check if these are numbers
		if (!checkIfNum(arguments[0]) || !checkIfNum(arguments[1])) {
			return undefined;
		} else {
			return arguments[0] + arguments[1];
		}
	} else {
		var ar1 = arguments[0];

		if (checkIfNum(ar1)) {
			return function (arg2) {

				if (!checkIfNum(ar1) || !checkIfNum(arg2)) {
					return undefined;
				} else {
					return ar1 + arg2;
				}
			};
		}

	}
}

console.log(addTogether("qwer"));