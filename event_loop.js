
/*

Event Loop

由于在请求时不需要等待响应返回，程序可以在执行完请求函数后无需等待响应继续执行其他逻辑，当异步请求完成后，再执行其回调函数就行了。不过这里需要明确几个问题：回调函数寄存在哪？以什么顺序进行执行？由什么触发回调？

消息队列（Message Queue）
JavaScript运行环境包含一个消息队列，消息队列存储了一系列待处理的消息，这些消息与对应的回调函数绑定在一起。当绑定了回调函数的外部事件（例如鼠标点击、接收到HTTP请求的响应等）被触发，消息将进入消息队列等待处理。但如果事件没有绑定回调函数，消息是不会入队的。

事件循环（Event Loop）
在一次循环中，消息队列出队一个消息，并执行对应的回调函数，每一次出队我们称作”tick”；举一个例子
 */

/*
回调函数的执行时机

如果代码中调用了一个异步函数（比如下面的setTimeout），消息，会新生成一个消息入队，在Event Loop未来的某次tick中出队并调用与之绑定的回调函数。

*/

function func() {
  console.info("foo");
  setTimeout(tick, 0);
  console.info("baz");
  func2();
}
function tick() {
  console.info("bar");
}
function func2() {
  console.info("blix");
}
func();



/*
    在这个例子中，setTimeout被调用，传入了回调函数tick以及时间间隔0毫秒。经过指定时间后（几乎是立即），一个与当前独立的消息入队，并绑定回调函数tick。调用栈中所有帧弹出后，执行队列中消息出队并执行所绑定的回调函数。具体输出如下：
    foo
    baz
    blix
    bar
    如果在func中连续调用多个setTimeout函数，则回调函数执行顺序依赖setTimeout执行先后顺序。

*/


/*

闭包

JavaScript对闭包的支持允许回调函数在执行时访问其外部的上下文，上下文在声明回调的函数弹出调用栈后仍然有效。考虑下面的例子：

*/


function say_hello() {
    var name = "programmer";
    console.info("hello, decaywood!");
    var say_hello_again = function() {
        console.info("hello, " + name + "!")
    };
    setTimeout(say_hello_again, 1000);
}

say_hello();

/*
在这个例子中，say_hello函数被执行时定义了变量name。之后setTimeout函数被执行，约1000毫秒后，绑定了say_hello_again回调的消息入队。之后say_hello函数返回，栈帧弹出结束第一个消息的处理，但name变量仍然可以通过闭包被引用，而不是被垃圾回收。当第二个消息被处理(say_hello_again回调)，它保持了对在外部函数上下文中声明的name变量的访问。一旦回调函数执行结束，header变量可以被垃圾回收。

执行结果：

hello, decaywood!
hello, programmer!
结语

JavaScript事件驱动的交互模型不同于许多程序员习惯的请求-响应模型，但如你所见，它并不复杂。使用简单的消息队列和事件循环，JavaScript使得开发人员在构建他们的系统时使用大量asynchronously-fired（异步-触发）回调函数，让运行时环境能在等待外部事件触发的同时处理并发操作。然而，这不过是并发的一种方法而已。

SOURCE： blog.decaywood.me
*/