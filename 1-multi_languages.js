/* You can do this exercise with different way to print three sentences the console using JavaScript in a few different ways:
 
 * 1. By creating separate string variables and log each one individually
 * 2. By putting those strings into an array and access them by their index
 * 3. By using a for loop to go through the array and print each sentence
 * 4. might try out the forEach() method to display each item.
 
 *Each approach gives you the same result while highlighting different JavaScript skills like handling arrays and using loops
 */

// First way: separate variables

let line1 = 'C is fun', line2 = 'Python is cool', line3 = 'JavaScript is amazing';i
console.log(line1);
console.log(line2);
console.log(line3);

// second way : array with direct access

let MyVaribles = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
console.log(MyVaribles[0] + '\n' + MyVaribles[1] + '\n' + MyVaribles[2]);

// Third way: using a for loop to iterate through the array

let myVariables = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
for (let i=0; i<myVariables.length; i++){
console.log(myVariables[i]);
}

//fourth way: using forEach with a callback function

let myVariables = ['C is fun', 'Python is cool', 'JavaScript is amazing'];

/*
1. The forEach method goes through each item in the array one by one.
2. 'item' is the current element of the array during each iteration.
3. This function is called a callback function because it is passed to forEach.
4. forEach calls this function once for every element in the array.
5. The callback function tells forEach what to do with each element,
   because forEach itself doesn't know what to do.
*/

myVariables.forEach(function(item) {
  console.log(item);
});
