/*
Translate the provided string to pig latin.

Pig Latin takes the first consonant (or consonant cluster) of an English word, moves it to the end of the word and suffixes an "ay".

If a word begins with a vowel you just add "way" to the end.

Input strings are guaranteed to be English words in all lowercase.
*/

function translatePigLatin(str) {
	"use strict";
	var vowels = "aeiouy";
	var res;

	if (vowels.indexOf(str[0]) != -1) {
		return str + "way";
	} else {
		var firstVowel = str.search(/[aeiouy]/);
		var consCluster = str.substr(0, firstVowel);

		res = str.substr(firstVowel, str.length) + consCluster + "ay";
	}



	return res;
}

console.log(translatePigLatin("consonant"));