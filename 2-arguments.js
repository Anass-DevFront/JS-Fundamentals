// process.argv is an array that holds the command-line arguments passed to the Node.js process.
// process.argv[0] is the path to the Node.js executable.
// process.argv[1] is the path to the script file being run.
// Using slice(2) skips these two and returns only the user-provided arguments.

const args = process.argv.slice(2)

// Check if the first argument exists
// If args[0] is undefined, it means no arguments were passed

if (args[0] === undefined) {
  console.log("No argument");
}

// Check if the second argument exists
// If args[1] is undefined, it means only one argument was passed

else if (args[1] === undefined) {
  console.log("Argument found");
}

// If we reach here, it means args[0] and args[1] both exist,
// so there are at least two arguments passed

else {
  console.log("Arguments found");// Two or more arguments provided
}
