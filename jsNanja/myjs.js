"use strict";
(function (v) { console.log(v) })(3)
function xx() {
  return this;
}
let x = xx() === window;// 非严格模式，xx的this指向全局windows，严格模式，则是undefined
console.log(x)
                                                                                                                                                                                                                                                                                   
