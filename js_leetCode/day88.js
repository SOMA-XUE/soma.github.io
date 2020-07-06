let yd = {
    x:1,
    y:2
}

let ydw1 = {
    ...yd,
    get x() {
        throw new Error()
    }
}

let ydw2 = {
    ...ydw1,
}

/* let ydw2 = {
    ...yd,
    ...{
        get x() {
            throw new Error()
        }
    }
} */