/*
Check if the predicate (second argument) is truthy on all elements of a collection (first argument).

Remember, you can access object properties through either dot notation or [] notation.

Falsy values
if (false)
if (null)
if (undefined)
if (0)
if (NaN)
if ('')
if ("")
if (document.all) [1]
*/

function truthCheck(collection, pre) {
	"use strict";
	// Is everyone being true?
	var res = true;

	for (var i = 0; i < collection.length; i++) {
		if (!collection[i][pre]) {
			return false;
		}
	}

	return res;

}

console.log(truthCheck([{
	"user": "Tinky-Winky",
	"sex": "male"
}, {
	"user": "Dipsy",
	"sex": "male"
}, {
	"user": "Laa-Laa",
	"sex": "female"
}, {
	"user": "Po",
	"sex": "female"
}], "sex"));