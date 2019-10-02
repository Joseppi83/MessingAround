//Testing if a var/let/const is parsed and stored in memory and if the engine will allow it to be used, before it is declared lexically (physically).
console.log(a);

//We can invoke functions before they are declared, because functions are parsed and stored in memory in their entirety, before the code is executed in the browser.
aValue();

//Variable declarations with the keyword "var" are parsed and stored in memory as undefined, before the code is executed in the browser.
//Variables declared with var are capable of being used before they are declared a value lexically (physically), because they are parsed and stored in memory as UNDEFINED
//Var is function scoped
var a =
  "Does a var get parsed and stored as undefined first? And does the engine allow it to be used, before it is declared lexically (physically)?";

//Variable declarations with the keyword "const" and "let" are parsed and stored in memory as undefined, before the code executes in the browser.  However, the engine does NOT allow it to be used until after it is declared a value lexically (physically).
//Let and const are block scoped
// let a = "Does a const/let get parsed and stored as undefined first? And does the engine allow it to be used, before it is declared lexically (physically)?";
// const a = "Does a const/let get parsed and stored as undefined first? And does the engine allow it to be used, before it is declared lexically (physically)?";

console.log(a);
// aValue();

//Parsed and stored in memory in its entirety before the execution of the code, because it's a function.
function aValue() {
  if (a === undefined) {
    console.log(
      "The variable was parsed and stored as UNDEFINED, but is unable to be used until AFTER it is declared a value"
    );
  } else {
    console.log("Not stored as undefined.");
  }
}
