const fromEuroToDollar = function(valueInEuro) {
    let valueInDollar = valueInEuro * 1.07;
    return valueInDollar;
}
const fromDollarToYen = function(valueInDollar) {
    let valueInYen= ((valueInDollar * .07) + valueInDollar) * 156.5;
    return valueInYen;
}
const fromYenToPound = function(valueInYen) {
    let valueInDollar = valueInYen * 1.07;
    return valueInDollar;
}
const sum = (a,b) => {
    return a + b
}
console.log(sum(7,3))

module.exports = {sum, fromEuroToDollar};