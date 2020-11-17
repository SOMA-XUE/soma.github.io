/*
 * @Author: your name
 * @Date: 2020-11-16 18:10:14
 * @LastEditTime: 2020-11-17 11:21:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \soma.github.io\typescript\5.ts
 */
// 抽象类，只能用来继承，抽象方法，必须实现
abstract class Animal {
    name: string;
    abstract getName(): string
}

class Cat extends Animal {
    getName(): string {
        return this.name;
    }
}

interface Speakable {
    speak():void;
}
interface Eatable {
    eat():void;
}
class Dog extends Animal implements Speakable, Eatable {
    getName() {
        return this.name;
    }
    speak() {}
    eat() {}
}
//任意属性
interface Xx {
    [propName:string]:number;
}

let obj1:Xx = {
    x:1,
}
// 可索引接口
// 用来对数组和对象进行约束
interface UserInterface {
    [index:number]: string
}

let array1:UserInterface = ['xx']
let obj2:UserInterface = {
    1: 'xxx',
    // 'xx':1,
}

// 接口继承
interface SpeakChinese extends Speakable {
    speakChine():void
}
namespace b {
    
}