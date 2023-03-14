//  we can assign one type of date to variable that containing another type of data in javascript

let message = "hello";
message = 2234

alert(message)

//that's why javascript called dynamically typed programming language

let n = 123;
n = 123.1213;

// these both numbers above are subtypes of type "number"
// except ordinary numbers, there are two Infinity, -Infinity and NaN type
// Infinity represemt the infinity from math, we can get it in javascript simply deleting any number by 0
alert(n / 0);

alert(Infinity);

// NaN defines calculating error

alert("hello" / 2);
alert(NaN + 1);
alert(3 + NaN);
alert("no number" / 2 -1 );
// As you can see any mathematical operation where participate NaN, returns NaN

// Mathematical expression in js are "save", script will not stop or die because error


// Ordinary numbers have their limits,  to avoid unexpected consequences you better use big integers, if your number biger than 2^52-1 


const bigInt = 1234567890123456789012345678901234567890n;
// in the end of big integer is always n 

// Strings, are texts or characters and siply stored in quotes 

let str = "HI";
let str2 = 'Hello';
let phrase = `Recursive single quotes let you format strings ${str}`;

let name = "Ivan";

alert(`Hello, ${name}`);

alert(`Result, ${3 + 5}`);


// boolean type are true or false

let nameFieldChecked = true;
let nameAgeChecked = false;


// null type is none of any type

let age = null;

// it's a link to non exsisting object

// Type undefined is the same as null but if only value doesn exsit, for instance variable is declared but not assigned

age = undefined;

alert(age)

//  Type object is special, all of other types are called primitive

//  object can handle a collection of types or more complecated structures 

//  "typeof" returns the type of the argument can be used with and without  brackets 

alert(typeof name);
alert(typeof(age));


typeof undefined // "undefined"

typeof 0 // "number"

typeof 10n // "bigint"

typeof true // "boolean"

typeof "foo" // "string"

typeof Symbol("id") // "symbol"

typeof Math // "object"  (1)

typeof null // "object"  (2)

typeof alert // "function"  (3)

// There are 8 main types in javascript 
/*
number
bigint
string
boolean
null
undefined
symbol
object
*/