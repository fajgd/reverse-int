function reverse(number) {
module.exports = function reverse (num) {
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign( + num)
    )
}
