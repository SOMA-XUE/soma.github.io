let emperor = {
    name: 'xxx'
}

const representative = new Proxy(emperor, {
    get: (target, key) => {
        return key in target ? target[key] : 'error'
    },

    set: (target, key, value) => {
        console.log(`${new Date().toGMTString()} log: writing ${key} through proxy`)
        target[key] = value;
    }
})

function makeLoggable(target) {
    return new Proxy(target, {
        get: (target, key) => {
            console.log(`${new Date().toGMTString()} log: read ${key} through proxy`)
            return target[key]
        },

        set: (target, key, value) => {
            console.log(`${new Date().toGMTString()} log: writing ${key} through proxy`)
            target[key] = value;
        }
    })
}

// console.log(representative.nickname === 'error')
// representative.nickname = 'wei'
// console.log(representative.nickname) 

// 通用函数，返回新的代理对象
emperor = makeLoggable(emperor)

console.log(emperor.name === 'xxx')

emperor.nickname = 'soma'
console.log(emperor.nickname)
