function* father() {
    yield 'father1'
    yield son();
    yield 'father2'
}

function* son () {
    yield 'son1'
    yield 'son2'
}

// for(let i of father()) {
//     console.log(i)
// }

let xx = father()
console.log(xx.next())
console.log(xx.next())
console.log(xx.next())
console.log(xx.next())
let yy = father()
console.log(yy.next())

 
