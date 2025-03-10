const add = function(num1, num2) {
  return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2);
};

const sum = function(numArray) {
  return numArray.reduce(add, 0)
};

const multiply = function(numArray) {
  let total = 1
  for (i=0; i<numArray.length; i++) {
    total = total * numArray[i]
  }
  return total
};

const power = function(num1, num2) {
	return (num1 ** num2);
};

const factorial = function(num) {
	let total = 1
  for (let i=1; i<=num; i++) {
    total = total * i
  }
  return total
};

console.log(multiply(2, 3));
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
