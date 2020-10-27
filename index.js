const str = "hello world hello world"

/// makes the first character of a given string uppercase
String.prototype.capitalize = function(){
    var first = this.charAt(0)
    var firstCap = this.replace(first,this.charAt(0).toUpperCase())
    return firstCap
}

console.log(str.capitalize())
/// makes all characters uppercase

String.prototype.allCaps = function() {
    return this.toUpperCase()
}
console.log(str.allCaps())

/// makes the first character of each word uppercase

String.prototype.capitalizeWords = function() {
    let string = this.toLowerCase()
    return string.split(' ').map((s) => s.charAt(0).toUpperCase() + s.substring(1)).join(' ')
}

console.log(str.capitalizeWords())

/// Removes all spaces from the beginning and end of a String 
/// along with any extra spaces in the middle

/// Removes extra spaces and replaces spaces with the hyphen "-", 
/// and makes all characters lowercase


/// Removes extra space and replaces spaces with an underscore "_", 
/// and makes all characters lowercase

/// Lowercases the first character of the first word. 
/// Then uppercases the first character of all other words, and removes all spaces

///this method will take the first character of a string and move to the end of a string
