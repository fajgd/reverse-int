module.exports = function reverse (number) {
  const reversedNumber = parseInt(number.toString().split('').reverse().join(''));
  return reversedNumber;
}

