//js in browser not node
let module = {
  exports: {}
};

( function(module, exports){
  exports.multiply = function (n) { return n * 1000 };
} (module, module.exports))

let f = module.exports.multiply;
console.log( f(5) ) // 5000 