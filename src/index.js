
function reverseInt(num) {
    let reversed = 0;
    while (num !== 0) {
        const digit = num % 10;
        reversed = reversed * 10 + digit;
        num = Math.floor(n / 10);
    }
    return reversed;
}

const number = parseInt(prompt("Введите целое число:"));
const reversedNumber = reverseInt(number);
console.log("Перевёрнутое число:", reversedNumber);
