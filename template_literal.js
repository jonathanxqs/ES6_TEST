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

// Construct an HTTP request prefix is used to interpret the replacements and construction
// 构建一个通用的http请求前缀，其中字段值可以动态替换
POST`http://foo.org/bar?a=${a}&b=${b}
     Content-Type: application/json
     X-Credentials: ${credentials}
     { "foo": ${foo},
       "bar": ${bar}}`(myOnReadyStateChangeHandler);