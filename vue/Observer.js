// import defineReactive = require("./defineReactive");

class Observer {
    constructor(value) {
        defineReactive(value, '__ob__', this, false);

        this.walk(value)
    }

    walk(value) {
        for (let k in value) {

        }
    }
}