/*
 * @Author: your name
 * @Date: 2020-11-16 14:26:10
 * @LastEditTime: 2020-11-16 15:08:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \soma.github.io\typescript\3.ts
 */
// 类定义
class Person {
    name: string = 'zhangsan';
    age: number;
    constructor() {
        // 可在外面初始化，也可在constructor里面
        this.age = 10;
    }
}
let P1 = new Person()

// 命名空间，可重名
namespace b {
    class Person {
        name: string = 'zhangsan';
        age: number;
        constructor() {
            // 可在外面初始化，也可在constructor里面
            this.age = 10;
        }
    }
}
//继承
/**  public 自己 自己的子类 其他的类都可以访问
  *  protected 受保护的 自己和自己的子类可以访问(实例不可以访问)
  *  private  只能自己访问 
  *  static 静态属性、方法，可以直接调用*/
namespace d {
    class Person {
        public name: string;
        protected age: number;
        private password: number;
        constructor(name: string, age:number, password: number) {
            // 可在外面初始化，也可在constructor里面
            this.name = name;
            this.age = age;
            this.password = password;
        }
        getName() {
            return this.name + this.password;
        }
    }

    class Student extends Person {
        static type = 'class';
        stuNo:number;
        constructor(name:string,age:number,stuNo:number) {
            super(name,age);
            this.stuNo = stuNo;
        }
        static getType() {
            return Student.type;
        }
        getStuNo() {
            return this.stuNo;
        }
        setStuNo(stuNo:number) {
            this.stuNo = stuNo;
        }
    }

    let xiaoming = new Student('xiaoming',1,2);
    console.log(xiaoming.getName());
    Student.getType();
    // xiaoming.age;
}