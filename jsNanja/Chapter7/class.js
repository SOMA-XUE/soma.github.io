class Person {
    // static value1 = 1;
    static compare(o1, o2) {
        console.log(o1.level - o2.level)
    }

    constructor(name) {
        this.name = name
    }

    dance() {
        return true;
    }
}

let ninjia1 = new Person()

// 实例不能调用static
// ninjia1.compare({level: 2}, {level: 1});

Person.compare({level: 2}, {level: 1});
// console.log(Person.value1)

class Man extends Person {
    constructor(name, weapon) {
        super(name)
        this.weapon = weapon
    }

    wieldWeapon() {
        console.log('wiedleWeapon')
        return true;
    }
}

let ninjia2 = new Man()
ninjia2.wieldWeapon()
console.log(ninjia2.name)
// Man.compare({level: 2}, {level: 1});


