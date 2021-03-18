function processName(v) {
    let tempArr = v.split(',');
    let newV = tempArr[0].split('')

    if (newV.length > 4) {
        return newV.reduce((prev, cur, index) => {
            if (index < 4) {
                return (prev + cur)
            } else if (index > 3 && index < 7) {
                return (prev + '.')
            } else {
                return prev
            }
        })  + tempArr[1];
    } else {
        return v + tempArr[1];
    }

}

console.log(processName("南京飞翰网, 二级"))
// console.log(pro('abcd'))
