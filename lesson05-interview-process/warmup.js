function reverseString(str) {
    return str.split("").reverse().join("")
}

console.log(reverseString("Hello, World!"));
// Expected Output: "!dlroW ,olleH"

function capitalizeWords(str) {
    let arr = str.split(" ")
    return arr.map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(" ")
}

console.log(capitalizeWords("hello, world!"));
// Expected Output: 'Hello, World!'

console.log(capitalizeWords("javascript is awesome"));
// Expected Output: 'Javascript Is Awesome'

function countVowels(str) {
    return (str.match(/[aeiou]/gi) || []).length
}

console.log(countVowels("hello"));
// Expected Output: 2

console.log(countVowels("programming"));
// Expected Output: 3
