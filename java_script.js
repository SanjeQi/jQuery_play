// Regex case sensitive

let regex = /great/;
let string = 'Regex is great!';

let result = string.match(regex);
console.log(result);

/* Returning "null" if the word "great" is not present in the sting and the output below id it is

["great", index: 9, input: "Regex is great!", groups: undefined]
0: "great"
groups: undefined
index: 9
input: "Regex is great!"
length: 1
__proto__: Array(0)

*/

// Regex case insensitive

regex = /great/i;
string = 'Regex is Great!';

result = string.match(regex);
console.log(result);

// Regex global  - search "e" - for every instance -global

regex = /e/g;
string = 'Regex is Great!';

result = string.match(regex);
console.log(result);
