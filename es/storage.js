import "core-js/modules/es.regexp.constructor.js";
import "core-js/modules/es.regexp.exec.js";

/**
 * 设置cookie
 * @param name 键名
 * @param value 键值
 * @param days 保存时间，单位天，默认30天
 * @param domain 域
 */
export function setCookie(name, value, days = 30, domain = '') {
  var exp = new Date();
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = "".concat(name, "=").concat(value, ";expires=").concat(exp.toGMTString(), "; path=/;domain=").concat(domain);
}
/**
 * 获取对应键名的cookie值
 * @param name 键名
 */

export function getCookie(name) {
  var reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  var arr = document.cookie.match(reg);

  if (arr) {
    return unescape(arr[2]);
  } else {
    return null;
  }
}
/**
 * 删除对应键名的cookie
 * @param name 键名
 */

export function delCookie(name) {
  setCookie(name, '', -1);
}
/**
 * 设置localStorage、sessionStorage key前缀
 */

var prefix = '';
export function setPrefix(str) {
  prefix = str;
}