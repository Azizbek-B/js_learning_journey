
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

