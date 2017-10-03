!(function() {

  // 创建symbol
  let key = Symbol("key");

  function MyClass(privateData) {
    this[key] = privateData;
  }

  MyClass.prototype = {
    doStuff: function() {
      this[key] += 1;
      console.log(this["key"]);
    }
  };

})();

let c = new MyClass("hello");
c["key"] === undefined ;//无法访问该属性，因为是私有的
console.log(c["key"]);