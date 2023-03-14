
let message;

message = "Hello";

// Optionally we can declare variable and assign it at the same time, insted of the code above.
/*
Example: 
let message = "Hello";
*/

alert(message);


let name = 'Johnn';
let age = '25';
let message2 = 'World';

 
// Alternatively we can assign multiple variable leke an example below:
/*
let name = 'John',
    age = '25',
    message2 = 'World'; 
*/


// !!! In the older version of script you usually will see "var" key instead of "let" key of declaration of variable

/*
 var message3 = "Hello, world";

 However, as mentioned earlier, it is not commot to see using of it in modern code sample;
*/


// Variable is mutable, and can change it's value by reassigning it.


message='World';
// the previous value of variable "message" was "Hello", now it's a "World"

alert(message)

// we can also copy the value of one variable to another one 

message=message2

// Btw, we can declare varible only once 

/*
let message = "something sussy"
let message = "another thing"

*/

// The naming of variables are simple, we can user characters, symbols ($,_) and/or numbers
// But numbers can not be in the begining

/*
let first_Var = 1

the wrong option:
let 1_Var = 1
*/

/* Non latin sybols are not restricted, but not recomended */

// you can not use reserved words for naming, like let and alert

// // // Constatnts // // //
// If developer shure that the value of variables will not be changed, or edited in the future you can use const key instead of let



const immutable_var = "Hello. world!";

// This piece of code will be cause to error
// immutable_var = "Hello, world!";



const COLOR_RED = "#F00";
const COLOR_GREEN = "#0F0";
const COLOR_BLUE = "#00F";
const COLOR_ORANGE = "#FF7F00";

// Big letters are used to identeify constants that contain difficult values to memorize, like colors

