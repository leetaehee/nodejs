const { odd, even } = require('./var.js');

function checkOddOrEven(num)
{
    if (num % 2) {
        // 홀수
        return odd;
    } else {
        // 짝수
        return even;
    }
}

module.exports = checkOddOrEven;