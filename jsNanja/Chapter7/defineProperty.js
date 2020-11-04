let ninji = {}

ninji.name = 'soma'

Object.defineProperty(ninji, 'gender', {
    configurable: false, // 能否删除
    enumerable: true,
    value: 'man',
    writable: true, // 可以修改
})

for (let i in ninji) {
    console.log(i, ninji[i])
}