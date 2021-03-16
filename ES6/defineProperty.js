function defineProperty(obj, key, val) {
    Object.defineProperty(obj, key, {
        enumable: true,
        configurable: true,
        get() {
            // val为闭包内
            return val;
        },

        set(newValue) {
            if( val === newValue) {
                return;
            }
            val = newValue;
        }
    })
}

let obj ={};
defineProperty(obj, 'name', 11)

console.log(obj.name)
