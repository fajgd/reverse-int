function reverse(number) {
    const reversedStr = number.toString().split('').reverse().join('');
    return parseInt(reversedStr);
}
