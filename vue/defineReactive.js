function defineReactive(data, key, val) {
    if(arguments.length === 2) {
        val = data[key]
    }

    Object.defineProperty(data,key, {
        enumerable: true,
        configurable: true,
        get() {
            console.log(`get--${key}`)
            return val;
        },
        set(newValue) {
            console.log(`set--${key}`);
            if(val === newValue) return;
            val = newValue;
        }
    })
} 

let temp = {}
defineReactive(temp,'name')
temp.name = 111

module.exports = defineReactive;
// export default defineReactive;