let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}
const fromDollarToYen = (a) => {
    dollar = a;
    euroDif= a * 0.07;
    euro = a + euroDif;
    yen = euro * 156.5;
    return yen;
}
const fromEuroToDollar = (b) => {
    euro = b;
    dollar = b * 1.07;
    return dollar;

}
const fromYenToPound = (c) => {
    yen = c;
    euro = (c/156.5);
    pound = euro * 0.87;
    return pound;
}
test("One euro should be 1.07 dollars", function() {
    const { fromEuroToDollar } = require('./app.js');
    const expected = 3.5 * 1.07; 
    expect(fromEuroToDollar(3.5)).toBe(3.745); 
})
test("0.75 cent in the dollar is 111.93 yen", function() {
    const { fromDollarToYen } = require('./app.js');
    const expected = ((3.5 * .07) + 3.5) * 156.5; 
    expect(fromDollarToYen(3.5)).toBe(586.0925); 
})
test("192.27 yen should be one pound", function() {
    const { fromYenToPound } = require('./app.js');
    const expected = ((4069 / 156.5) * 0.87); 
    expect(fromYenToPound (4069)).toBe(22.62); 
})