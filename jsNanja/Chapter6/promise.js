// const readFile = require('file')

function myPro(value) {
    return new Promise((reslove, reject) => {
        if (value === 111) {
            setTimeout(() => {
                reslove(value)
            },0)
        } else {
            reject('error')
        }
        
        // console.log(333)
        // reslove(111)

    })
}

// const xxx = new myPro(111);
// xxx.then(data => {console.log(data); return new myPro()}).then(data => console.log(data)).catch(e => console.log(e));

Promise.all([myPro(111), myPro(111), myPro(111)]).then(results => {
    const res = results[0];
    console.log(results)
})

Promise.race([myPro(111), myPro(111), myPro(111)]).then(res => console.log(res))