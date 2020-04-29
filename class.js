class Mytime {
    constructor() {
        this.time = new Date().getTime();
        // static he = '12';
    }

    printTime() {
        console.log("now:", this.time);
    }
}

var temp = new Mytime();
temp.printTime();