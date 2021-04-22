/**
* @type {number} num1 - first number
* @type {number} num2 - second number
* @type {string} message - first number
*
*/
// declare program variables
var num1;
var num2;
var message;
// announce the program
alert("Let's do some math!");
collectNumericInput();


/**
 * Prompt user to input values and pass to be validated 
 * @param {number} num1 - first user defined number
 * @param {number} num2 - second user defined number
 */
// collect numeric input
function collectNumericInput(){

num1 = prompt("Please type a number");
num1 = parseFloat(num1);
num2 = prompt("Please type another number");
num2 = parseFloat(num2);

  validateInput(num1, num2);
}


/**
 * Validate user input before passing for output
 * @param {number} num1 - first user defined number
 * @param {number} num2 - second user defined number
 */
function validateInput(num1, num2){

if ( num2 === 0 ) {
  // Error message
  alert(`The second number cannot be a zero a you cannot divide by zero.
          Click OK to re-enter your numbers`);
  // Re-serve input forms if error found
  collectNumericInput();

} else if (isNaN(num1) || isNaN(num2)) {
    // Error message
    alert(`At least one of the values you typed is not a number.
          Click OK to re-enter your numbers`);
    // Re-serve input forms if error found
    collectNumericInput();
  
} else {
  // Pass validated input to output()
  output(num1, num2);
}
}


/**
 * Perform maths and output results 
 * @param {number} num1 - first user defined number
 * @param {number} num2 - second user defined number
 * @type {string} message - output
 */
function output(num1, num2){
// build an HTML message
message = `
<h1>Math with the numbers ${num1} and ${num2}</h1>
<p>${num1} + ${num2} = ${num1 + num2}</p>
<p>${num1} * ${num2} = ${num1 * num2}</p>
<p>${num1} / ${num2} = ${num1 / num2}</p>
<p>${num1} - ${num2} = ${num1 - num2}</p>
  `;
  
// write message to web page
document.write(message);

}