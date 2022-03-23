// JavaScript strings are used for storing and manipulating data
// Strings can have zero or more characters inside quotes
// Strings are primitive values created from literals, but can be defined as objects with the new keyword

const string = "This is a string";
const string1 = 'This is also a string';
const string2 = `This is also a string`;

console.log(string, string1, string2)

// String .length (to find a string's length use the .length property)
console.log(string.length)

// Escape characters allow you to use quotes within strings without issues
const escapeS = "Hello World prints \"Hello World\"";
console.log(escapeS)

// Escape Sequences
// \n is new line
newS = "Hello \nWorld";
console.log(newS)

// \t is horizontal tabulator
newS = "Hello \tWorld";
console.log(newS)

// \v is vertical tabulator
newS = "Hello \vWorld";
console.log(newS)

// JavaScript String Methods (all string methods return a new string, they do not modify the old string)
// string.length returns length of string
let news = "New String"
console.log(news.length)

// string.slice(start, end) returns part of string, .slice(start, end) returns part of a string starting at index start and ending before index end
// If parameter is entered negative than the position is counted from end of string
console.log(news.slice(2, 5))
console.log(news.slice(-5, -3))

// string.substring(start, end) is the same as slice but does not accept negative index positions 
console.log(news.substring(2, 8))

// string.substr(start, length) returns a portion of a string starting at index start and going for the length of parameter length
console.log(news.substr(2, 4))

// Replace (string.replace searches for a value and replaces the first instance with another specified value)
// Replace returns a new string so you must create a new variable for the output
// For case insensitive replace use /i falg after search term (/String/i), for replacement of all values use /g flag for global matches
let newText = news.replace("String", "Word")
console.log(newText)

// UpperCase (convert string to Upper Case using string.toUpperCase)
console.log(news.toUpperCase())

// Lower Case (converts string to Lower Case using .toLowerCase)
console.log(news.toLowerCase())

// Concatenate joins to or more strings using concat()
newString = string1.concat(string2, news);
console.log(newString)

// Padding works for number strings
// Pad Start (adds padding to the beginning of a string)
let string4 = "5"
let padNews = string4.padStart(5, "f");
console.log(padNews)

// Pad End (adds padding to the end of a string)
padNews = string4.padEnd(5, 0);
console.log(padNews)

// JavaScript String Search
// string.indexOf() finds index position of first occurence
// Both index of and last index of accept second parameter of start of search and both return -1 if not matches are found
let string5 = "Dictionary";
console.log(string5.indexOf("nar"))
console.log(string5.indexOf("i", 2))

// string.lastIndexOf finds the index position of the last occurence of the value
let string6 = "Mississippi";
console.log(string6.lastIndexOf("i"))
console.log(string6.lastIndexOf("i", 3))

// string.search searches a string for the value and returns the position of the match
// .search has no second parameter but can accept regular expressions unlike indexOf
console.log(string6.search("s"))

// string.match searchs a string for a value and returns matches as an array
// /""/g flag returns all matches of specified value
console.log(string6.match(/i/g))

// string.includes returns a true false value if the string includes the specified value
// Second parameter is the starting index, default is 0
console.log(string6.includes("M"))

// string.startsWith returns true false if a string begins with the specified value
console.log(string6.startsWith("M"))

// string.endsWith returns a true false if a string ends with the specified value
console.log(string6.endsWith("I"))

// Template Literals allow variables in strings
let insert = 9;
let sentance = `The number is ${insert}`;
console.log(sentance)