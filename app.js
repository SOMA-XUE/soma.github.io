var index = '';
var env = process.env.NODE_ENV
console.log(process.env.NODE_ENV, env ,typeof env)

if (env === JSON.stringify('development')) {
    index = 'localhost'
} else if(env === 'production'){
    index = 'esales'
} else {
    index = 'xxx'
}

console.log('index', index)
// console.log('process', process)