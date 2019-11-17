function windowResize() {
    // console.log('width', window.innerWidth);
    let width = window.innerWidth;
    width = Math.max(width, 320)
    width = Math.min(width, 750)
    document.querySelector('html').style.fontSize = width /15 +'px';

}
// 给window绑定一个resize事件
window.addEventListener('resize', windowResize);
// 手动触发一次，相当于jQuery的trigger
window.dispatchEvent(new Event('resize'))