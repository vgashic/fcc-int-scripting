/*
Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
*/

function convertHTML(str) {
  "use strict";

  var chars = ["&", "<", ">", "\"", "'"];
  var ent = ["&amp;", "&lt;", "&gt;", "&quot;", "&apos;"];

  for (var i = 0; i < chars.length; i++) {
    str = str.replace(new RegExp(chars[i], "g"), ent[i]);
}

return str;

}

console.log(convertHTML("Hamburgers < Pizza < Tacos"));