/*
 * @Author: soma 
 * @Date: 2020-04-27 17:36:40 
 * @Last Modified by: soma
 * @Last Modified time: 2020-04-29 15:00:45
 */


// 时间对比工具

// '2020-04-28 00:00:00' = '2020-04-28'
function compareDate(target = '2020-04-30 00:00:00') {
    const targetTime = new Date(target).getTime();
    const nowTime = new Date().getTime();
    if (nowTime >= targetTime) {
        // 到了设定时间
        console.log('到了设定时间')
        return true;
    } else {
        // 还未到设定时间
        // var temp = `还未到设定时间,还差${Math.floor((targetTime - nowTime) / 3600000)}小时`;
        console.log('还未到设定时间,还差', `${Math.floor((targetTime - nowTime) / 3600000)}`, '小时')
        return false;
    }
}
