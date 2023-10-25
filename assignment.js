/*Problem 1: Write a function to calculate the area of a triangle.*/
function areaOfTriangle(base,height){
    console.log(1/2*base*height);
}
areaOfTriangle(10,5);

/*Problem 2: Write a function to convert degrees to radians.*/
function degreeToRadians(degrees){
    return degrees*Math. PI/180 + "rad";
}
let radians= degreeToRadians(1);
console.log(radians);

/*Problem 3: Create a function calculateFactorial that takes a number and returns its factorial.*/
let n = 0;
function calculateFactorial(n) {
    let m = 1;
    for (let i = 1; i <= n; i++) {
        m *= i;
    }
    return m;
}
const result = calculateFactorial(n);
console.log(result);

/*Problem 4: Create a function isPrime that takes a number as a parameter and returns true if it's a prime number, and false otherwise.*/
function isPrime(num){
    const condition1 = num / 1 == num;
    const condition2 = num / num == 1;
    const condition3 = num % 2 !== 0;
    const condition4 = num % 3 !== 0;
    const condition5 = num <= 1;
    const condition6 = num <= 3;
    if ( condition5) {
        return "False";
    }
    if ( condition6) {
        return "True";
    }
    if (condition1 && condition2 && condition3 && condition4 ) {
        return "True";
    }
    return "False";
}
    console.log(isPrime(3));

/*Problem 5: Create a function mergeArrays that takes two arrays as parameters and returns a new array that merges both arrays.*/
function mergeArrays(array1, array2){
    console.log([...array1,...array2]);
}
mergeArrays(["name","Jim"],["Job","Lawyer"]);

/*Problem 6: Create a function isLeapYear that takes a year as a parameter and returns "This is a leap year" if it's a leap year, and "Not Leap year" otherwise.*/
function isLeapYear(year){
    const condition1 = year % 4 === 0;
    const condition2 = year % 100 === 0;
    const condition3 = year % 400 === 0;
    if (condition1 && condition2 && condition3) {
        return "This is a leap year";
    }
    return "Not Leap year";
}
console.log(isLeapYear(year));
/*Problem 7: Create a function removeDuplicates that takes an array and returns a new array with duplicates removed.

Problem 8: Create a function convertToCelsius that takes a temperature in Fahrenheit and returns the equivalent temperature in Celsius.

Problem 9: Write a function to find the maximum of five numbers.

Problem 10: Create a function called evenOdd() that takes a string as a parameter. Now you have to give the output based on the total number of characters in your String. The output will be 'even' or 'odd'. [ Input: ‘JavaScript’ Output: even, Input: ‘Hello’ Output: odd]*/




=> Answer any 4 questions.

1. Explain the difference between 'if...else' and 'switch' statements for conditional logic.

2. What is JavaScript, and what is its primary purpose in web development?

3. Explain the difference between var, let, and const when declaring variables in JavaScript.

4. Explain the concept of "scope" in JavaScript and the difference between global and local scope.

5. What is the difference between "null" and "undefined" in JavaScript?
