const fibonacci = function(memberCount) {
    let prevNum = 1;
    let currentNum = 1;
    let temp;

    if (memberCount == 0) {
        return 0
    }
    else if (memberCount < 0) {
        return "OOPS"
    }
    for (let i = 0; i < memberCount - 2; i++) {
        temp = currentNum;
        currentNum = prevNum + currentNum;
        prevNum = temp;
    }

    return currentNum
};

// Do not edit below this line
module.exports = fibonacci;

console.log(fibonacci("1"))