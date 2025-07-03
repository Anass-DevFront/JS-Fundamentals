/* You can do this exercise with different way to print three sentences the console using JavaScript in a two different ways:
 
 * 1. By creating separate string variables and log each one individually
 * 2. By putting those strings into an array and access them by their index
 */

// First way: separate variables

let line1 = 'C is fun', line2 = 'Python is cool', line3 = 'JavaScript is amazing';
console.log(line1);
console.log(line2);
console.log(line3);

// second way : array with direct access

let MyVariables = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
console.log(MyVariables[0] + '\n' + MyVariables[1] + '\n' + MyVariables[2]);
