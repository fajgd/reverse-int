function reverse(number) {
  const reversedString = number.toString().split('').reverse().join('');
  return parseInt(reversedString);
}
