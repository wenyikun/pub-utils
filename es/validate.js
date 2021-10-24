import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
var toString = Object.prototype.toString;
/**
 * 判断是否为浏览器环境
 */

export var inBrowser = typeof window !== 'undefined';
var UA = inBrowser ? window.navigator.userAgent : '';
/**
 * 判断__proto__是否可用
 */

export var hasProto = ('__proto__' in {});
/**
 * 判断是否为对象类型
 */

export function isObject(val) {
  return val !== null && typeof val === 'object';
}
/**
 * 判断是否为普通对象类型
 */

export function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}
/**
 * 判断是否为数组
 */

export function isArray(val) {
  return toString.call(val) === '[object Array]';
}
/**
 * 判断是否为正则
 */

export function isRegExp(val) {
  return toString.call(val) === '[object RegExp]';
}
/**
 * 判断是否为Date类型
 */

export function isDate(val) {
  return val instanceof Date;
}
/**
 * 判断是否为函数类型
 */

export function isFunction(val) {
  return typeof val === 'function';
}
/**
 * 判断是否为Promise类型
 */

export function isPromise(val) {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch);
}
/**
 * 判断是否为有效时间
 */

export var INVALID_DATE = 'Invalid Date';
export function isValidDate(val) {
  return !(new Date(val).toString() === INVALID_DATE);
}
/**
 * 是否为微信浏览器
 */

export var isWechat = /MicroMessenger/gi.test(UA);
/**
 * 判断是否为企业微信浏览器
 */

export var isWorkWechat = isWechat && /wxwork/gi.test(UA);
/**
 * 是否为iOS环境
 */

export var isIos = /iphone|ipad|ipod|ios/i.test(UA);
/**
 * 是否为安卓环境
 */

export var isAndroid = UA.indexOf('android') > 0;
/**
 * 判断是否为 url
 */

export function isUrl(val) {
  var reg = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i;
  return reg.test(val);
}
/**
 * 判断是否为手机号
 */

export function isMobile(val) {
  return /^1\d{10}$/.test(val);
}
/**
 * 判断是否为邮箱
 */

export function isEmail(val) {
  return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(val);
}
/**
 * 判断是否为合法身份证号
 */

export function isCardID(val) {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(val)) {
    return false;
  } // 身份证城市


  var aCity = {
    11: '北京',
    12: '天津',
    13: '河北',
    14: '山西',
    15: '内蒙古',
    21: '辽宁',
    22: '吉林',
    23: '黑龙江',
    31: '上海',
    32: '江苏',
    33: '浙江',
    34: '安徽',
    35: '福建',
    36: '江西',
    37: '山东',
    41: '河南',
    42: '湖北',
    43: '湖南',
    44: '广东',
    45: '广西',
    46: '海南',
    50: '重庆',
    51: '四川',
    52: '贵州',
    53: '云南',
    54: '西藏',
    61: '陕西',
    62: '甘肃',
    63: '青海',
    64: '宁夏',
    65: '新疆',
    71: '台湾',
    81: '香港',
    82: '澳门',
    91: '国外'
  };

  if (!aCity[val.substr(0, 2)]) {
    return false;
  } // 出生日期验证


  var sBirthday = (val.substr(6, 4) + '-' + Number(val.substr(10, 2)) + '-' + Number(val.substr(12, 2))).replace(/-/g, '/'),
      d = new Date(sBirthday);

  if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
    return false;
  } // 身份证号码校验


  var sum = 0;
  var weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
  var codes = '10X98765432';

  for (var i = 0; i < val.length - 1; i++) {
    sum += Number(val[i]) * weights[i];
  }

  var last = codes[sum % 11]; //计算出来的最后一位身份证号码

  if (val[val.length - 1] != last) {
    return false;
  }

  return true;
}
/**
 * 判断是否在iframe内
 */

export function isIframe() {
  return window !== top;
}
/**
 * 判断任意两个变量是否相等
 */

export function looseEqual(a, b) {
  if (a === b) return true;
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);

  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);

      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e, i) => {
          return looseEqual(e, b[i]);
        });
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime();
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key]);
        });
      } else {
        return false;
      }
    } catch (e) {
      return false;
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b);
  } else {
    return false;
  }
}