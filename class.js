class Mytime {
    static myname = 'myname1111';

    static print(v) {
        console.log(v)
    }

    constructor(time) {
        // super(props);

        // new Date().getTime()
        this.time = time;
        // static he = '12';
    }

    printTime() {
        console.log("now:", this.time);
    }
}

class newMytime extends Mytime {
    constructor(props) {
        super(props);
        this.soma = props.soma;
    }

    privateFun() {
        console.log(this.soma)
    }
}
// console.log(Mytime.myname)
// Mytime.print('xxxx')
// Mytime.printTime()

// var temp = new Mytime('2020');
// temp.printTime();


var temp2 = new newMytime('soma.xue','xxxxx')
temp2.printTime()
temp2.privateFun()