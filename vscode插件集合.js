/*
 * @Author: soma 
 * @Date: 2020-04-24 16:50:30 
 * @Last Modified by: soma
 * @Last Modified time: 2020-04-24 16:59:39
 */

// 选中一个函数的参数, ctrl+shift+p 后输入 gen jsdoc 并选择 gen jsdoc 命令, 即可生成 jsdoc 风格的函数注释

// 自定义打印函数
function _print(str) {
    console.log(`${str}:`, str);
}

_print('hello my function');