/*
Find the smallest common multiple of the provided parameters that can be evenly divided by both, as well as by all sequential numbers in the range between these parameters.

The range will be an array of two numbers that will not necessarily be in numerical order.

e.g. for 1 and 3 - find the smallest common multiple of both 1 and 3 that is evenly divisible by all numbers between 1 and 3.
*/

function gcd(a, b) {
	"use strict";

	if (b === 0) {
		return a;
	} else {
		return gcd(b, a % b);
	}
}

function lcm(a, b) {
	"use strict";

	return a * b / gcd(a, b);
}

function lcmArray(arr) {
	"use strict";

	var a;

	if (arr.length === 2) {
		return lcm(arr[0], arr[1]);
	} else {
		a = lcm(arr[0], arr[1]);
		arr.shift();
		arr[0] = a;

		return lcmArray(arr);
	}
}


function generateSequence(a) {
	"use strict";

	var result = [];

	for (var i = a[0]; i <= a[1]; i++) {
		result.push(i);
	}

	return result;
}



function smallestCommons(arr) {
	"use strict";

	if (arr.length != 2) {
		console.log("Please enter two number array");
		return false;
	}

	arr = arr.sort(function (a, b) {
		return a - b;
	});

	var sequence = generateSequence(arr);

	return lcmArray(sequence);
}


console.log(smallestCommons([1, 7]));
