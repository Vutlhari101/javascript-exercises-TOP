const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  if(array.length == 0) return 0;
	return array.reduce((total, curr) => total + curr);
};

const multiply = function(array) {
  if(array.length == 0) return 0;
  return array.reduce((total, curr) => total * curr);
};

const power = function(base, exp) {
	return base ** exp;
};

const factorial = function(n) {
  if(n < 0) return "ERROR";
	if(n == 0){
    return 1;
  }else{
    return n * factorial(n - 1);
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
