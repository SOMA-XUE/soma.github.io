function xx() {
    xx.temp =1
}

let yy = new xx()

console.log(yy instanceof xx)

console.log(yy.constructor === xx)

// console.log(yy.prototypeof)

function zz() {
}

xx.prototype.printf = () => console.log('helloe')


zz.prototype = new xx()

let ss = new zz()


ss.printf()