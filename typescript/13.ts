namespace ts13 {
    let x = { name: 'ss' }
    type b = typeof x;
    let xx: b = {
        name: 'bb'
    }

    // 条件类型的分发
    interface Fish {
        name1: string;
    }
    interface Water {
        name2: string;
    }
    interface Bird {
        name3: string;
    }
    interface Sky {
        name4: string;
    }
    type Condition<T> = T extends Fish ? Water : Sky;
    let x1: Condition<Fish | Bird> = {
        name2: 'x1'
    };
    let x2: Condition<Fish | Bird> = {
        name4: 'x1',
    }

    // 排除string
    type E = Exclude<string | number, string>; 
    // 提取
    type E2 = Extract<string | number, string>;
    // 非空
    type E3 = NonNullable<string | number | undefined | null>;
    type E4 = NonNullable<Condition<Fish>>

    
    function getUserInfo() {
        return { name: ' xx' };
    }
    // 函数返回值的类型
    type UserInfo = ReturnType<typeof getUserInfo>;
    let user: UserInfo = { name: 'xx' };
}