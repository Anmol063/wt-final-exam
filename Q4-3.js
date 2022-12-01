// 321
function reversedNum(num)
{
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}
console.log(reversedNum(321));


// -321
function reversedNum(num)
{
    return (
        parseFloat(
            num
                .toString()
                .split('')
                .reverse()
                .join('')
        ) * Math.sign(num)
    )
}
console.log(reversedNum(-321));