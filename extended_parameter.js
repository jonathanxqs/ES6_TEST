/* 
    Default Parameter Values
    Simple and intuitive default values for function parameters.
*/

function f (x, y = 7, z = 42) {
    return x + y + z
}
f(1) === 50


/* 
Rest Parameter
Aggregation of remaining arguments into single parameter of variadic functions.
*/
function f (x, y, ...a) {
    console.log(a[0]);
    console.log(a);
    return (x + y) * a.length;
}

console.log( f(1, 2, "hello", true, 7) )  // 9