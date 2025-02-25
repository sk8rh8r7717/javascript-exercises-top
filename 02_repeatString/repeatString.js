const repeatString = function(string, repeats) {
    newString = ""
    if (repeats < 0) {
        return "ERROR"
    }
    for (let i = 0; i < repeats; i++) {
        newString = newString + string;
    }
    return newString
};

// Do not edit below this line
module.exports = repeatString;