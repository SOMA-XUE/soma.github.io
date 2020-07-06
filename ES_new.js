let obj = {
    person1: {
        name: 'soma'
    }
}

// ES2020,
// 容错赋值
let temp = obj.person1?.name ?? '未有此人'
console.log(temp)