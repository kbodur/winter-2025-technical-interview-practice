# Lesson #: TOPIC
JavaScript Basics & Functions

## Warm-up (10 minutes)
* Brief discussion: What is JavaScript? Why do we use it?
* Brainstorming: Where do we see JavaScript in real-world applications?
* Quick quiz: Which of the following statements is true?
  1. JavaScript is only used for websites.
  2. JavaScript can be used for both front-end and back-end development.
  3. JavaScript is a compiled language.
(Correct answer: 2)


## Written Question (5 minutes)
   1. What are the three ways to declare a variable in JavaScript? What are the differences?
   2. Explain the difference between let and const.


## Lecture Content (20 minutes)
   1. JavaScript Basics
  * Variables and Data Types
    * var, let, const
    * String, Number, Boolean, Null, Undefined, Object, Array
    * Using typeof operator
  * Operators & Conditionals
    * Arithmetic, comparison, logical operators
    * if, else if, else statements
  * Loops & Arrays
    * for, while loops
    * Array methods: .push(), .pop(), .map(), .filter()
  * Functions
    * Defining Functions: function, const myFunc = () => {}
    * Using Parameters & Return Statements
    * Arrow Functions vs Regular Functions


## Problem Solving (35 minutes)
1. 🛠 Exercise 1: Even or Odd?
Write a function that takes a number and returns whether it is even or odd.

  function isEvenOrOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}
console.log(isEvenOrOdd(5)); // "Odd"
console.log(isEvenOrOdd(8)); // "Even"

2. 🛠 Exercise 2: Find the Maximum Number
Write a function that finds the largest number in an array.

function findMax(arr) {
  return Math.max(...arr);
}
console.log(findMax([3, 7, 2, 9, 5])); // 9

3. 🛠 Exercise 3: Reverse a String
Write a function that reverses a given string.

function reverseString(str) {
  return str.split("").reverse().join("");
}
console.log(reverseString("hello")); // "olleh"


## Recap (15 minutes)
 * Quick review of today’s topics:
   * Variables and data types
   * Conditionals and loops
   * Functions and examples
 * Q&A session for any doubts or questions.
 * Mini coding challenge:
1. Write a for loop that prints numbers from 1 to 10.
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

## Additional Resources
 * MDN JavaScript Documentation
 * JavaScript Practice Exercises
 * JavaScript Tutorials
