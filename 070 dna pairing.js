/*
The DNA strand is missing the pairing element.Take each character, get its pair, and return the results as a 2d array.

Base pairs are a pair of AT and CG. Match the missing element to the provided character.

Return the provided character as the first element in each array.

For example, for the input GCG, return [["G", "C"], ["C","G"],["G", "C"]]

The character and its pair are paired up in an array, and all the arrays are grouped into one encapsulating array.
*/

function getPair(str) {
	var res;

	switch (str.toLowerCase()) {
		case "a":
			res = "t";
			break;

		case "t":
			res = "a";
			break;

		case "g":
			res = "c";
			break;

		case "c":
			res = "g";
			break;
		default:
			res = "";
	}

	return res.toUpperCase();
}


function pairElement(str) {
	"use strict";

	var res = [];

	if (str.search(/[^atcg]/i) == -1) {

		for (var i = 0; i < str.length; i++) {
			res.push([str[i].toUpperCase(), getPair(str[i])]);
		}

	} else {
		return "Invalid string. It should contain only letters G, C, A and T";
	}

	return res;
}

console.log(pairElement("GCGAT"));