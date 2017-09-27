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


/*
Spread Operator
Spreading of elements of an iterable collection (like an array or even a string) into both literal elements and individual function parameters.
*/

var params = [ "hello", true, 7 ]
var other = [ 1, 2, ...params ] // [ 1, 2, "hello", true, 7 ]
f(1, 2, ...params) === 9

var str = "foo"
var chars = [ ...str ] // [ "f", "o", "o" ]



function add(...x){
    return x.reduce((m,n)=>m+n);
}

console.log(add(1,2,3));//输出：6
console.log(add(1,2,3,4,5));//输出：15


var people=['Wayou','John','Sherlock'];
//sayHello函数本来接收三个单独的参数人妖，人二和人三
function sayHello(people1,people2,people3){
    console.log(`Hello ${people1},${people2},${people3}`);
}
//但是我们将一个数组以拓展参数的形式传递，它能很好地映射到每个单独的参数
sayHello(...people);//输出：Hello Wayou,John,Sherlock 

//而在以前，如果需要传递数组当参数，我们需要使用函数的apply方法
sayHello.apply(null,people);//输出：Hello Wayou,John,Sherlock 