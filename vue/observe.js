
export default function(obj) {
    if(typeof obj !== 'object') {
        return;
    }
    var ob;
    if(obj.__ob__ !== 'undefined') {
        ob = obj.__ob__;
    } else {
        ob = new Observer(obj)
    }
    return ob;
}