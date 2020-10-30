const ninjia = {
    ninjia: [1,2,3],
    get firstNin() {
        return this.ninjia[0]
    },

    set firstNin(v) {
        // 日志
        // 
        console.log('enter set ', v)
        this.ninjia[0] = v
    }
}

ninjia.ninjia[0] = 4
ninjia.firstNin = 1 // 不是方法
console.log(ninjia.firstNin === 1)