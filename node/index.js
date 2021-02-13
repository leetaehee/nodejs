const { odd, even } = require('./var.js');
const checkNumber = require('./func.js')

function checkStringOddOrEven(str)
{
    if (str.length % 2) {
        // 홀수
        return odd;
    }
    return even;
}

console.log(checkNumber(12));
console.log(checkStringOddOrEven('hello!'));