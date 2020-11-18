const name = "Angel Juarez";
console.log(name);
// expected output > "Angel Juarez"
// actual output > "Angel Juarez"

const anotherName = "Someone else";
console.log(anotherName);
// > "Something else"
// > "Something else"

const stringAndNumString = "Hello + 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2" + '+';
console.log(stringAndNumString);
// expected output > "Hello + 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2 +"
// actual output > Hello + 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+ 2+

let x, y, z;
x = 1200;
y = z;
z = x + y;
// expected output > error
// actual output > NaN

const bondJames = 007;
console.log(BondJames);
// expected output > error because the B is capitalized in the console log when it should be lowecase
// actual output > console.log(BondJames);
//                             ^
// ReferenceError: BondJames is not defined at Object

let y = 12;
console.log(y + 1 + x);
// expected output > 13 + x
// actual output > console.log(y + 1 + x);
//                                     ^
// ReferenceError: x is not defined at Object