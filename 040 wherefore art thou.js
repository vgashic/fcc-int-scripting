/*
Make a function that looks through an array of objects (first argument) and returns an array of all objects that have matching property and value pairs (second argument). Each property and value pair of the source object has to be present in the object from the collection if it is to be included in the returned array.

For example, if the first argument is:
	[{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
and the second argument is:
	{ last: "Capulet" }

then you must return the third object from the array (the first argument), because it contains the property and its value, that was passed on as the second argument.
*/


function whatIsInAName(collection, source) {
    // What's in a name?
    var arr = [];
    // Only change code below this line

    //console.log(collection[0]);

    var sourcePropNames = Object.keys(source);
    var n = sourcePropNames.length;
    var colPropNames;

    for (var i = 0; i < collection.length; i++) {
        //console.log(collection[i]);

        for (var j = 0; j < n; j++) {
            if (!collection[i].hasOwnProperty(sourcePropNames[j])) {
                collection.splice(i, 1);
            } else {
                console.log(collection[i]);
                console.log(sourcePropNames[j] + ": " + source[sourcePropNames[j]]);


                if (collection[i][sourcePropNames[j]] !== source[sourcePropNames[j]]) {
                    collection.splice(i, 1);
                    console.log("deleted");
                }
                console.log("#######################");
            }
        }

    }




    // Only change code above this line
    return collection;
}

console.log(whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" }));
//console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));