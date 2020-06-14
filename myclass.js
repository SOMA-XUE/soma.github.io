// class Mytime {
//     constructor(props) {
//         this.time = props.time || new Date().getTime();
//         //  || new Date().getTime()
//         // static he = '12';
//     }

//     printTime() {
//         console.log("now:", this.time);
//     }
// }

// var temp = new Mytime();
// temp.printTime();

// 创建一个类存放特有的属性和方法，用来实例对象。
class Human {
    heart = 1;
    breathe() {
        console.log('need breathe')
    }
}
class Student extends Human{
    // 静态属性只属于Student的属性
    // static s="180";
    // 静态方法只属于Student的方法
    static m(){
        console.log("静态方法")
    }
    // 构造方法
    constructor(props){
        //实例属性
        super();
        this.name=props.name;
        this.age=props.age;
        this.sex=props.sex;
    }
    // 实例方法
    students(){
        console.log(this.name+this.age+this.sex)
    }
}

// 静态属性调用
// console.log(Student.s)
// 实例化对象
var S1 = new Student({name:'tom',age:21,sex:'男'});
// 调用方法
console.log(Human.heart)

console.log(S1.heart)
S1.students()
S1.breathe()

