
/*
http://www.jb51.net/article/50967.htm


函数声明：function fnName () {…};使用function关键字声明一个函数，再指定一个函数名，叫函数声明。

函数表达式 var fnName = function () {…};使用function关键字声明一个函数，但未给函数命名，最后将匿名函数赋予一个变量，叫函数表达式，这是最常见的函数表达式语法形式。

匿名函数：function () {}; 使用function关键字声明一个函数，但未给函数命名，所以叫匿名函数，匿名函数属于函数表达式，匿名函数有很多作用，赋予一个变量则创建函数，赋予一个事件则成为事件处理程序或创建闭包等等。
*/



 
var fnName=function(){
  console.log('Hello World');
}(undefined);
//函数表达式后面加括号，当javascript引擎解析到此处时能立即调用函数

function fnName(){
  console.log('Hello World 2 ');
}(undefined);
//不会报错，但是javascript引擎只解析函数声明，忽略后面的括号，函数声明不会被调用

(function(){
  console.log('Hello World 3');  
}()) ;
//语法错误，虽然匿名函数属于函数表达式，但是未进行赋值操作，
//所以javascript引擎将开头的function关键字当做函数声明，报错：要求需要一个函数名
 

 (function(a){
  console.log(a);  //firebug输出123,使用（）运算符
})(123);
  
(function(a){
  console.log(a);  //firebug输出1234，使用（）运算符
}(1234));
  
!function(a){
  console.log(a);  //firebug输出12345,使用！运算符
}(12345);
  
+function(a){
  console.log(a);  //firebug输出123456,使用+运算符
}(123456);
  
-function(a){
  console.log(a);  //firebug输出1234567,使用-运算符
}(1234567);
  
var fn=function(a){
  console.log(a);  //firebug输出12345678，使用=运算符
}(12345678)
