interface Point {
    readonly x: number;
    readonly y: number;
}

let p1: Point = {
    x: 1,
    y: 2
}

// p1.x =2 
let a:number[] = [1,2,3]
let ro: ReadonlyArray<number> =a
// ro[0] = 12
a = ro as number[]

// 索引签名，但在这我们要表示的是SquareConfig可以有任意数量的属性
interface SquareConfig {
    color?: string;
    width?: number;
    [propName: string]: any;
}

// 函数类型
interface SearchFunc {
    (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
// mySearch = function(src: string, sub: string):boolean {
mySearch = function(src, sub) {
    let result = src.search(sub)
    return result > -1
}


// 可索引的类型
interface StringArray {
    [index: number]: string;
}

let myArray: StringArray;
myArray = ['Bob', 'Fred']

let myStr: string = myArray[0]

