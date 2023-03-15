// String conversion

let value = true;
alert(String(value)); // now it is "true" as a string
alert(typeof(String(value)));


// Number conversion

alert("6"/"2"); // the answer is 3 as number
//mathematical expression done with stringed numbers will be converted to number


let str = "134";
alert(Number(str)); // now it's a number
alert(typeof(Number(str)));

let age = "any not number string";
alert(Number(age)); // it return NaN


// undefined will be converted to NaN
// null will be converted to 0
// true and fallse will be converted to 1 and 0
// in strings space like symbols are cut from retght and left sides, and space itself converted to 0 if it is not cutten.

alert( Number("   123   ") ); // 123
alert( Number("123z") );      // NaN
alert( Number(true) );        // 1
alert( Number(false) );       // 0


// Boolean conversion

alert( Boolean(1) ); // true
alert( Boolean(0) ); // false

alert( Boolean("Привет!") ); // true
alert( Boolean("") ); // false


// Note 
alert( Boolean("0") ); // true
alert( Boolean(" ") ); // space true as well


//  0, undefined,  null , undefined, NaN, "" will be false
// any other type will be true

