const sumAll = function(a, b) {
    if (a < 0 || b < 0 || a%1 != 0 || b%1 != 0 || typeof(a) != "number" || typeof(b) != "number"){
        return "ERROR"
    }
    sum = 0
    if (a > b) {
        let temp = a
        a = b
        b = temp
    }
    for (i = a; i <= b; i++) {
        sum = i + sum;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
