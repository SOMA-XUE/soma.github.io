var imgLog_PageLoad = function imgLog_PageLoad() {
  try {
    var logs = new Array();
    logs['web_buttonid'] = 'load';
    logs['user_agent'] = navigator.userAgent;
    imgLog(logs);
  } catch (e) {}
};

var imgLog_Button = function imgLog_Button(logs) {
  try {
    imgLog(logs);
  } catch (e) {}
};

var imgLog = function imgLog(logs) {
  logs['product_id'] = 'yungame';
  logs['web_host'] = window.location.host;
  logs['biz_type'] = '';
  logs['flow_id'] = '';
  logs['web_source'] = ''; //url params

  var url_params = new URLSearchParams(window.location.search);

  if (url_params.get('userid')) {
    logs['web_userid'] = url_params.get('userid');
  }

  if (url_params.get('gameid')) {
    logs['game_appid'] = url_params.get('gameid');
  }

  if (url_params.get('biz_type')) {
    logs['biz_type'] = url_params.get('biz_type');
  }

  if (url_params.get('flow_id')) {
    logs['flow_id'] = url_params.get('flow_id');
  }

  if (url_params.get('source')) {
    logs['web_source'] = url_params.get('source');
  } //config
  // if(_sqyungame_config.web_pageid) {
  //     logs['web_pageid'] = _sqyungame_config.web_pageid;
  // }


  imgLogPrivate(logs);
};

var imgLogPrivate = function imgLogPrivate(params) {
  var img = new Image();
  var d = new Date();
  var event_time = fmtDate(d, "yyyy-MM-dd hh:mm:ss");
  d.setHours(d.getHours(), d.getMinutes() - d.getTimezoneOffset());
  var timestamp = d.toISOString();
  timestamp = timestamp.substr(0, timestamp.length - 1) + '+08:00';
  var request_timestamp = timestamp;
  var web_guidid = '';

  if (getCookie('web_guidid')) {
    web_guidid = getCookie('web_guidid');
  } else {
    web_guidid = traceId();
    setCookie('web_guidid', web_guidid);
  }

  var web_url = window.location.href;
  var point_id = (Array(6).join(0) + (Math.random() * 1000000 >> 0)).slice(-6);
  var hardware_deviceid = '';
  var hardware_androidid = '';

  if (typeof window.USER !== 'undefined' && window.USER.getSystemInfo !== 'undefined') {
    var getSystemInfo = window.USER.getSystemInfo() || {};
    hardware_deviceid = getSystemInfo.getDeviceId() || '';
    hardware_androidid = getSystemInfo.getAndroidId() || '';
  }

  var realParams = {
    timestamp: timestamp,
    request_timestamp: request_timestamp,
    event_time: event_time,
    web_guidid: web_guidid,
    web_url: web_url,
    point_id: point_id,
    hardware_deviceid: hardware_deviceid,
    hardware_androidid: hardware_androidid
  };
  Object.assign(realParams, params);
  var url = '//reportsk.sdo.com/report/ge/weblog?log=' + encodeURIComponent(JSON.stringify([realParams]));
  img.src = url;
};
/**
 *   对Date的扩展，将 Date 转化为指定格式的String 
 *   月(M)、日(d)、小时(h)、分(m)、秒(s)、季度(q) 可以用 1-2 个占位符， 
 *   年(y)可以用 1-4 个占位符，毫秒(S)只能用 1 个占位符(是 1-3 位的数字)
 *   例子：
 *   (new Date()).Format("yyyy-MM-dd hh:mm:ss.S") ==> 2006-07-02 08:09:04.423
 *   (new Date()).Format("yyyy-M-d h:m:s.S")      ==> 2006-7-2 8:9:4.18 
 */


var fmtDate = function fmtDate(date, fmt) {
  //author: meizz 
  var o = {
    "M+": date.getMonth() + 1,
    //月份 
    "d+": date.getDate(),
    //日 
    "h+": date.getHours(),
    //小时 
    "m+": date.getMinutes(),
    //分 
    "s+": date.getSeconds(),
    //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3),
    //季度 
    "S": date.getMilliseconds() //毫秒 

  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));

  for (var k in o) {
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
  }

  return fmt;
};

var getCookie = function getCookie(name) {
  var arr,
      reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");
  if (arr = document.cookie.match(reg)) return decodeURIComponent(arr[2]);else return null;
}; //设置cookie  


var setCookie = function setCookie(name, value, seconds) {
  seconds = seconds || 0; //seconds有值就直接赋值，没有为0  

  var expires = "";

  if (seconds != 0) {
    //设置cookie生存时间  
    var date = new Date();
    date.setTime(date.getTime() + seconds * 1000);
    expires = "; expires=" + date.toGMTString();
  }

  document.cookie = name + "=" + encodeURIComponent(value) + expires + "; path=/"; //转码并赋值  
};

var traceIdNumber = function traceIdNumber(num) {
  var seed = [[0, 2, 3, 5, 9, 8, 7, 1, 4, 6], [1, 4, 3, 8, 5, 7, 9, 0, 6, 2], [3, 4, 0, 9, 5, 8, 7, 6, 2, 1], //百
  [2, 9, 5, 3, 0, 8, 1, 7, 4, 6], //千
  [5, 3, 2, 0, 4, 8, 9, 1, 7, 6] //万
  ];

  if (!num) {
    num = Math.round(new Date().getTime() / 1000);
    seed = [[6, 9, 5, 3, 0, 8, 1, 7, 4, 2], [0, 2, 3, 5, 9, 8, 7, 1, 4, 6], [5, 3, 2, 0, 4, 8, 9, 1, 7, 6], [3, 4, 0, 9, 5, 8, 7, 6, 2, 1], [1, 4, 3, 8, 5, 7, 9, 0, 6, 2]];
  }

  num = num.toString().split('').reverse().join('');
  var newNum = '';

  for (var i = 4; i >= 0; i--) {
    var n = '0';

    if (num[i] != undefined) {
      n = num[i];
    }

    newNum += seed[i][n];
  }

  return newNum;
};

var traceId = function traceId() {
  var traceId = '';
  var beginDate = new Date('2015-01-01');
  var today = new Date();
  var daysSpan = Math.round((today.getTime() - beginDate.getTime()) / 86400000).toString();
  traceId = traceIdNumber(daysSpan) + traceIdNumber() + Math.round(today.getTime() % 10);
  return traceId;
};