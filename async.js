const fs  = require('fs')

// function xx() {
//     setTimeout(() => {
//         console.log('xx finished')
//     },1000)
//     return 'hello wrold!'
// }

// async function hello() {
//     // let temp = await xx()
//     let temp = xx()

//     console.log('temp',temp)
// }

// hello();

function readPath(path) {
    return new Promise((resolve,reject) => {
        fs.readFile(path,'utf-8',(err,data) => {
            if(err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

async function test() {
    let hh = await readPath('./test.txt')
    console.log(hh)
}

test()