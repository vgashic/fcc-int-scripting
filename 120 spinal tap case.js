/*
Convert a string to spinal case. Spinal case is all-lowercase-words-joined-by-dashes.
*/

function spinalCase(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  var res = str.replace(/-|_/g, " ").replace(/[A-Z]/g, function(match) {
    return " " + match.toLowerCase();
  }).replace(/\s+/g, " ").trim().replace(/\s/g, "-");

  return res;
}

console.log(spinalCase('This_Is-Spinal      Tap'));