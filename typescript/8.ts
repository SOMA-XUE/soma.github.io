/*
 * @Author: your name
 * @Date: 2020-11-17 14:34:14
 * @LastEditTime: 2020-11-18 14:45:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \soma.github.io\typescript\8.ts
 */
namespace c {
    function CreateArray<T>(length: number, value: T): Array<T> {
        let tempArray = [];
        for (let i = 0; i++; i < length) {
            tempArray[i] = value;
        }
        return tempArray;
    }
    let array1 = CreateArray<number>(3, 1);
    let array2 = CreateArray<string>(3, 'xx');
}

// 类数组 Arraylike arguments
interface IArguments {
    [index: number]: any;
    length: number;
    callee: Function;
}
function sum(...args: any[]) {
    let args2: IArguments = arguments;
}

// !为断言，肯定不为null
let root: HTMLElement | null = document.getElementById('xxx')
let children: HTMLCollection = root!.children;
let childNodes: NodeListOf<ChildNode> = root!.childNodes;

class MyArray<T> {
    private list: T[] = [];
    add(val: T) {
        this.list.push(val)
    }

    getMax(): T {
        let max = this.list[0]
        for(let i of this.list) {
            max = max>i ? max : i;
        }
        return max;
    }
}

// 映射类型 在定义时，用in操作符批量定义
namespace d {
    interface Person {
        name: string;
        age: number;
        height: number;
    }
    type Person1 = {
        [key in keyof Person]?: Person[key];
    }
    
    type Partial<T> = {
        [key in keyof T]?: T[key]
    }
    type PartialPerson = Partial<Person>;

    let david: Person1 = {
        name: 'david'
    }
    let lucy: PartialPerson = {
        name: 'lucy'
    }
}

let arr3 = new MyArray<number>();

arr3.add(1);
arr3.add(2);
let res3:number = arr3.getMax();
console.log(res3)
