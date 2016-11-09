
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


// same as ES5.1
// 与 ES5.1 相同
"吉".length == 2

// new RegExp behaviour, opt-in ‘u’
// 使用可选的‘u’修饰符表示正则
"吉".match(/./u)[0].length == 2

// new form
// 左边是新写法，右边是旧写法。新的形式可以通过添加一组大括号`{}`来表示超过四字节的码点
"\u{20BB7}"=="吉"=="\uD842\uDFB7"

// new String ops
"吉".codePointAt(0) == 0x20BB7

// for-of iterates code points
// 以码位为单位进行迭代
for(var c of "吉") {
  console.log(c);
}
