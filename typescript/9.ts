// 接口的兼容性
namespace aa {
    interface Animal {
        name: string;
        age: number;
    }
    interface Person {
        name: string;
        age: number;
        speak: () => void
    }

    let xiaoming: Person ={
        name: 'xiaoming',
        age:13,
        speak: () => {
            console.log('haha')
        }
    }

    function conName(v: Animal) {
        console.log(v.name);
    }

    conName(xiaoming);

    // 函数兼容性
    interface xx {
        
    }
}
