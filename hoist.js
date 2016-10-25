/* 
  Hoisting is a term you will not find in the JavaScript docs. 
Hoisting was thought up as a general way of thinking about how execution context 
(specifically the creation and execution phases) work in JavaScript. 
But, hoisting can lead to misunderstandings. For example, hoisting teaches that 
variable and function declarations are physically moved to the top your coding, but
 this is not what happens at all. What does happen is the variable and function
declarations are put into memory during the compile phase, but stays exactly where
 you typed it in your coding.  
 */

// One of the advantages you get from JavaScript putting function 
// declarations into memory first, before it executes any coding, 
// is this allows you to use a function before you declare it in your coding. 

catName("Chloe");

function catName(name) {
  console.log("My cats name is " + name);
}
/*
The results of the coding above is: "My cats name is Chloe"
*/


