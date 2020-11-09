var p1 = {
    x: 1,
    y: 2
};
// p1.x =2 
var a = [1, 2, 3];
var ro = a;
// ro[0] = 12
a = ro;
var mySearch;
// mySearch = function(src: string, sub: string):boolean {
mySearch = function (src, sub) {
    var result = src.search(sub);
    return result > -1;
};
