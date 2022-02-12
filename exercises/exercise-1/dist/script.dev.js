"use strict";

/*

Exercise 1
----------

- Before running the code, discuss the expected order of each loop!
- Synchronous - Write code that loops through the array of greek gods and prints the
  index numbers and values to the console, e.g. '0. Aphrodite'
- Run the code on the command line in node
- Asynchronous - Same as before but the index and the value of the god at position
  2 in array should be printed after 2 seconds. Hint: use setTimeout()
- Run the code on the command line in node

*/
var greekGods = ["Aphrodite", "Ares", "Artemis", "Athena", "Poseidon", "Zeus"];
greekGods.forEach(function (item, index) {
  if (index === 2) {
    setTimeout(function () {
      return console.log(index, item);
    }, 3000);
  } else {
    console.log(index, item);
  }
});