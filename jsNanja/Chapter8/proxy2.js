// 使用代理检测函数性能

function isPrime(v) {
    if(v < 2 ) {
        return false;
    }

    for(let i = 2; i< 2;i++) {
        if(v % i === 0 ) {
            return false;
        }
    }
}

isPrime = new Proxy(isPrime, {
    apply: (target, thisArg, args) => {
        console.time('isPrime')

        const result = target.apply(thisArg, args)

        console.timeEnd('isPrime')

        return result;
    }
})

isPrime(13)

// 使用代理自动填充属性 
