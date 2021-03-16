/*
 * @Author: your name
 * @Date: 2020-12-01 17:31:42
 * @LastEditTime: 2020-12-01 17:38:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \soma.github.io\typescript\12.ts
 */
namespace xx12 {
    // keyof 索引类型查询操作符
    interface Person3 {
        name: string;
        age: number;
        gender: 'male' | 'female'
    }

    type Person3Keys = keyof Person3;
    function getValueByKey(val: Person3, key: Person3Keys) {
        return val[key];
    }

    // 映射类型 在定义的时候，用in操作符批量定义
    type PartialPerson = {
        [key in keyof Person3]?: Person3[key]
    }
    // Partial 可选
    type PartialPerson2 = Partial<Person3>;
    // -? -为取反的意思
    type RequiredPerson = {
        [key in keyof Person3]-?: Person3[key]
    }
    // Required 必填
    type RequiredPerson2 = Required<Person3>;
    // Readonly 只读
    type ReadonlyPerson2 = Readonly<Person3>;
    // pick
    type PickPerson = Pick<Person3, 'name'>;
    let x : PickPerson = {
        name: 'name'
    }
}