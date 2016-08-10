/*
Perform a search and replace on the sentence using the arguments provided and return the new sentence.

First argument is the sentence to perform the search and replace on.

Second argument is the word that you will be replacing (before).

Third argument is what you will be replacing the second argument with (after).

NOTE: Preserve the case of the original word when you are replacing it. For example if you mean to replace the word "Book" with the word "dog", it should be replaced as "Dog"
*/

function myReplace(str, before, after) {

	var afterProperCase = before[0].toLowerCase() == before[0] ? after : after[0].toUpperCase() + after.substr(1, after.length);
	var i = str.toLowerCase().indexOf(before.toLowerCase());

	var res = str.substr(0, i) + afterProperCase + str.substr(i + before.length);


	return res;
}

//console.log(myReplace("A quick brown fox jumped over the lazy dog", "Jumped", "leaped"));
console.log(myReplace("Let us go to the store", "store", "mall"));