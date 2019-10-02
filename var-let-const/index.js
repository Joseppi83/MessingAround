//TESTING IF CONST AND LET GET PARSED AND STORED IN MEMORY AS UNDEFINED.  I ALREADY KNOW VAR IS PARSED AND STORED IN MEMORY AS UNDEFINED.
console.log(a);

//We can invoke functions before they are declared, because functions are parsed and stored in memory in their entirety, before the code is executed in the browser.
aValue();

//Variable declarations with the keyword "var" are parsed and stored in memory as undefined, before the code is executed in the browser.
var a = "Does a var/const/let get parsed and stored as undefined first?";

//Variable declaration with the keyword "const" and "let" are NOT parsed and stored in memory as undefined, before the code executes in the browser.
// let a = "Does a const get parsed and stored as undefined first?";
// const a = "Does a const get parsed and stored as undefined first?";

console.log(a);
// aValue();

//Parsed and stored in memory in its entirety before the execution of the code, because it's a function.
function aValue() {
  if (a === undefined) {
    console.log("The variable was parsed and stored as UNDEFINED.");
  } else {
    console.log("Not stored as undefined.");
  }
}
