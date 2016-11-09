
/*
Extended Literals
Binary & Octal Literal
Direct support for safe binary and octal literals.

*/

0b111110111 === 503
0o767 === 503

/*
Unicode String & RegExp Literal
Extended support using Unicode within strings and regular expressions.

*/

"𠮷".length === 2
"𠮷".match(/./u)[0].length === 2
"𠮷" === "\uD842\uDFB7"
"𠮷" === "\u{20BB7}"
"𠮷".codePointAt(0) == 0x20BB7
for (let codepoint of "𠮷") console.log(codepoint)
