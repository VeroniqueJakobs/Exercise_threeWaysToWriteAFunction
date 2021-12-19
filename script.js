
// Three ways to write a function

//Function expression
const squaringNumbers = function(number1, number2) {
    const squared = number1 * number1;
    const squared2 = number2 * number2;
    const addSquared = squared + squared2;
    const sumSquared = addSquared * addSquared;
    return sumSquared;
}

const result = squaringNumbers( 4, 5);
console.log(result);

//Function declaration
function squaringNumbers2(number1, number2) {
    const squareda = number1 * number1;
    const squared2a = number2 * number2;
    const addSquareda = squareda + squared2a;
    const sumSquareda = addSquareda * addSquareda;
    return sumSquareda;
}

const resulta = squaringNumbers2( 4, 5);
console.log(resulta);


//arrow function
const squaringNumbers3 = (number1, number2) => {
    const squaredb = number1 * number1;
    const squared2b = number2 * number2;
    const addSquaredb = squaredb + squared2b;
    const sumSquaredb = addSquaredb * addSquaredb;
    return sumSquaredb;
}

const resultb = squaringNumbers3( 4, 5);
console.log(resultb);