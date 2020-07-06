let Container = function(value) {
    this.value = value;
}

Container.of = function(value) {
    return new Container(value)
}

Container.prototype.map = function(fn) {
    return Container.of(fn(this.value))
}

// let testValue = new Container(3)

// testValue = Container.of(3)

let double = x => x + x;

Container.of(3).map(double)


// console.log(testValue,typeof testValue)

// null.toUpperCase()

function request(method, url) {
    return fetch(url,{
        method,
    }).then(res => res.json()).then(myJson => console.log(myJson))
}

let getJueJinPosts = type =>{
    let response;
    try{
        response = JSON.parse(request('GET','https://juejin.im/timeline?sort=' + type))
    } catch (err){
        response = {message: 'Something went wrong',errorCode: err['statusCode']}
    }
    return response
}

console.log(getJueJinPosts('newest'))