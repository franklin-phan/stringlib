/* eslint-disable no-console */
/* eslint-disable func-names */
const str = 'hello world hello world';

/// makes the first character of a given string uppercase
// eslint-disable-next-line no-extend-native
String.prototype.capitalize = function () {
  const first = this.charAt(0);
  const firstCap = this.replace(first, this.charAt(0).toUpperCase());
  return firstCap;
};

console.log(str.capitalize());
/// makes all characters uppercase

// eslint-disable-next-line no-extend-native
String.prototype.allCaps = function () {
  return this.toUpperCase();
};
console.log(str.allCaps());

/// makes the first character of each word uppercase

// eslint-disable-next-line no-extend-native
String.prototype.capitalizeWords = function () {
  const string = this.toLowerCase();
  return string.split(' ').map((s) => s.capitalize()).join(' ');
};

console.log(str.capitalizeWords());

/// Removes all spaces from the beginning and end of a String
/// along with any extra spaces in the middle
const res = '   hello  world     hello  world     ';
// eslint-disable-next-line no-extend-native
String.prototype.removeExtraSpaces = function () {
  const string = this.trim();
  return string.split(' ').filter((s) => s !== '').join(' ');
};
console.log(res.removeExtraSpaces());

/// Removes extra spaces and replaces spaces with the hyphen "-",
/// and makes all characters lowercase

/// Removes extra space and replaces spaces with an underscore "_",
/// and makes all characters lowercase

/// Lowercases the first character of the first word.
/// Then uppercases the first character of all other words, and removes all spaces

/// this method will take the first character of a string and move to the end of a string
