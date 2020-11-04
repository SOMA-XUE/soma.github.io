function* People () {
    try {
        yield 'xx'

    } catch(e) {
        console.log(e === 1? '1111' : null)
    }
}

const people = People();
const res = people.next()
people.throw(1)
console.log(res)

