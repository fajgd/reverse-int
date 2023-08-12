
function reverse(number) {
    const reversedStr = number.toString().split('').reverse().join('');
    return parseInt(reversedStr);
}

console.log(reverse(123));    // Output: 321
console.log(reverse(233));    // Output: 332
console.log(reverse(535));    // Output: 535
console.log(reverse(95034));  // Output: 43059
