var transAmount = function(amount) { //金额加千分号
    var arr = [],
        str;
    var amt = amount.toString().split('.')[0];
    while (amt.length > 3) {
        arr.push(amt.substr(amt.length - 3));
        amt = amt.slice(0, amt.length - 3);
    }
    arr.push(amt);
    arr = arr.reverse();
    return str = arr.join(',') + amount.substr(amount.length - 3);
}

console.log(transAmount('123456789.00'));

// '12.34'.substr(1)