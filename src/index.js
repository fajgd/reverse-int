function reverse(number) {
  module.exports = function reverse (n) {
    let intToString = int.toString();

    let reversedString = intToString
        .split("")
        .reverse()
        .join("");

    let stringToInt = parseInt(reversedString, 10);

    return stringToInt * Math.sign(int);
}
