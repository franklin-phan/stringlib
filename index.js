const str = 'hello world hello world';

//Challenge 1
String.prototype.capitalize = function () {
  const first = this.charAt(0);
  const firstCap = this.replace(first, this.charAt(0).toUpperCase());
  return firstCap;
};

console.log(str.capitalize());
/// makes all characters uppercase
//Challenge 2
String.prototype.allCaps = function () {
  return this.toUpperCase();
};
console.log(str.allCaps());

/// makes the first character of each word uppercase
//Challenge 3
String.prototype.capitalizeWords = function () {
  const string = this.toLowerCase();
  return string.split(' ').map((s) => s.capitalize()).join(' ');
};

console.log(str.capitalizeWords());

/// Removes all spaces from the beginning and end of a String
/// along with any extra spaces in the middle
const res = '   hello  world     hello  world     ';
//Challenge 4
String.prototype.removeExtraSpaces = function () {
  const string = this.trim();
  return string.split(' ').filter((s) => s !== '').join(' ');
};
console.log(res.removeExtraSpaces());

/// Removes extra spaces and replaces spaces with the hyphen "-",
/// and makes all characters lowercase
//Challenge 5
const UP = 'HELLO HELLO!@:#$ Hello'
String.prototype.kabobCase = function () {
  const lowercase = this.toLowerCase().replace(/[^a-zA-Z0-9]/g, ' ');
  return lowercase.split(' ').filter((s) => s !== '').join('-')
}
console.log(UP.kabobCase());

/// Removes extra space and replaces spaces with an underscore "_",
/// and makes all characters lowercase
//Challenge 6

String.prototype.snakeCase = function () {
  const lowercase = this.toLowerCase().replace(/[^a-zA-Z0-9]/g, ' ');
  return lowercase.split(' ').filter((s) => s !== '').join('_');
}
console.log(UP.snakeCase());

/// Lowercases the first character of the first word.
/// Then uppercases the first character of all other words, and removes all spaces
//Challenge 7
const CAMEL = 'Hello world hello world'

String.prototype.camelCase = function () {
  const string = this.toLowerCase().replace(/[^a-zA-Z0-9]/g, ' ').split(' ').map((s) => s.capitalize()).join(' ');
  const first = string.charAt(0);
  const firstLow = string.replace(first, string.charAt(0).toLowerCase()).split(' ').filter((s) => s !== '').join('');
  return firstLow
}

console.log(CAMEL.camelCase());

/// this method will take the first character of a string and move to the end of a string
//Challenge 8

String.prototype.shift = function () {
  const first = this.charAt(0);
  const firstCap = this.replace(first,'');
  const shift = firstCap.concat(first)
  return shift;
}