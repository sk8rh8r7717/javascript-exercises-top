const palindromes = function (string) {
    //clean up string
    function isLetter(letter) {
        return ((letter.charCodeAt(0) >= 65) && (letter.charCodeAt(0) <= 122)) || ((letter.charCodeAt(0) >= 48) && (letter.charCodeAt(0) <= 57))
    }
    let cleanString = ""
    for (let i = 0; i < string.length; i++) {
        if (isLetter(string[i])) {
            cleanString+=string[i].toLowerCase()
        }
    }
    console.log(cleanString)
    //make reverse string
    let reverseString = ""
    for (let i = (cleanString.length - 1); i >=0; i--) {
        reverseString = reverseString + cleanString[i]
    }
    console.log(reverseString)
    //check if palindrome
    return (cleanString == reverseString)
};

// Do not edit below this line
module.exports = palindromes;

palindromes("Hello World.")