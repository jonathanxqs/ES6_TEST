1. String Interpolation

`string text`

`string text line 1
 string text line 2`

`string text ${expression} string text`

tag `string text ${expression} string text`

// Basic literal string creation  
`In JavaScript '\n' is a line-feed.`

// Multiline strings   
`In JavaScript this is
 not legal.`

// String interpolation 
var name = "Bob", time = "today";
`Hello ${name}, how are you ${time}?`


/*
Intuitive expression interpolation for single-line and multi-line strings. (Notice: don't be confused, Template Literals were originally named "Template Strings" in the drafts of the ECMAScript 6 language specification)

*/  

var customer = { name: "Foo" }
var card = { amount: 7, product: "Bar", unitprice: 42 }
var message = `Hello ${customer.name},
want to buy ${card.amount} ${card.product} for
a total of ${card.amount * card.unitprice} bucks?`



2.Custom Interpolation


// Construct an HTTP request prefix is used to interpret the replacements and construction
// 构建一个通用的http请求前缀，其中字段值可以动态替换

POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);


get`http://example.com/foo?bar=${bar + baz}&quux=${quux}`

ECMAScript 5:
get([ "http://example.com/foo?bar=", "&quux=", "" ],bar + baz, quux);
