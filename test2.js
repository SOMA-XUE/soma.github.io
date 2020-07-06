var F = function () {
    Object.prototype.a = function () {
        console.log('111')
    }

    Function.prototype.b = function () {
        console.log('2')
    }
}

var f = new F()

F.a();
F.b();
f.a();
f.b();