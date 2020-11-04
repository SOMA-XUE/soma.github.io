let grandFather = { grandFather: '111'}
let father = { father: '2222'}

Object.setPrototypeOf(father, grandFather)

// console.log(`father` in father)
// console.log(`grandFather` in father)
// console.log(father.hasOwnProperty(`grandFather`))



// 注意 hasOwnProperty 作为属性名
var foo = {
    hasOwnProperty: function() {
        return true;
    },
    bar: 'Here be dragons'
};
console.log(foo.hasOwnProperty(`xxx`))

let temp =Object.prototype.hasOwnProperty.call(foo, 'xxx');
console.log(temp)
