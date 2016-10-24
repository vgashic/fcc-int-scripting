/*
Return an English translated sentence of the passed binary string.

The binary string will be space separated.
*/

function binToInt(b) {

	var bin = b.split("").reverse().map(function (x) {
		return parseInt(x);
	});

	return bin.reduce(function (sum, curr, i) {
		return sum + (Math.pow(2, i)) * curr;
	}, 0);

}

function binaryAgent(str) {

	var splitted = str.split(" ");

	return splitted.map(function (x) {
		return String.fromCharCode(binToInt(x));
	}).join("");

}

console.log(binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111"));