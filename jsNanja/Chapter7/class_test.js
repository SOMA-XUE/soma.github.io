function Person() {}
function Ninjia() {}

Ninjia.prototype = new Person()

let xx = new Ninjia()

console.log(xx.constructor) 