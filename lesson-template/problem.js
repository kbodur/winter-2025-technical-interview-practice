// Write a function that takes a number and returns whether it is even or odd.

function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

module.exports = isEvenOrOdd;
console.log(isEvenOrOdd(5)); // "Odd"
console.log(isEvenOrOdd(8)); // "Even"