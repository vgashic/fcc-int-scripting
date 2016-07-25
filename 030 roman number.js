/*
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/



function convertToRoman(num) {
	"use strict";

	var roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
	var decimal = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
	var res = "";

	for (var i = 0; i < decimal.length; i++) {
		while (decimal[i] <= num) {
			res += roman[i];
			num -= decimal[i];
		}
	}

	return res;
}



convertToRoman(36);