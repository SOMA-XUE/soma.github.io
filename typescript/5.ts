/*
 * @Author: your name
 * @Date: 2020-11-16 18:10:14
 * @LastEditTime: 2020-11-16 18:18:18
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
     getName():string {
         return this.name;
     }
 }
