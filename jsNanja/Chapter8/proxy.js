const emperor = {
    name: 'xxx'
}

const representative = new Proxy(emperor, {
    get: (target, key) => {
        return key in target ? target[key] : 'error'
    },

    set: (target, key, value) => {
        target[key] = value;
    }
})

console.log(representative.nickname === 'error')
representative.nickname = 'wei'

console.log(representative.nickname)
