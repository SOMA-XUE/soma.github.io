/*
 * @Author: soma
 * @Date: 2020-11-30 16:49:40
 * @LastEditTime: 2020-12-01 17:31:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \soma.github.io\typescript\10.ts
 */

// 类型保护
function getXXX(v: number|string) {
    if(typeof v === 'number') {
        return v.toFixed(2)
    } else if(typeof v === 'string') {
        return v.toLocaleLowerCase();
    }
}

// instanceof 实例
namespace xx10 {
    class Animal {
        public name: string = 'zhu';
    }

    class Bird extends Animal {
        public swing:number = 2;
    }

    function getName(v:Animal) {
        if(v instanceof Bird) {
            return v.swing;
        } else {
            return v.name;
        }
    }

    

    
}


