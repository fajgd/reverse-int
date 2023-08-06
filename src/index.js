module.exports = function reverse (int) {
        let intToString = int.toString();

        let reversedString = [...intToString].reduce((acc, char) => char + acc);

        let stringToInt = parseInt(reversedString, 10);

        return stringToInt * Math.sign(int);
}

