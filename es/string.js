import "core-js/modules/es.string.pad-start.js";
import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";

/**
 * 转换对应长度字符串
 * @param num 初始值
 * @param targetLength 增加0到对应长度
 */
export function padZero(num, targetLength = 2) {
  var str = num + ''; // while (str.length < targetLength) {
  //   str = '0' + str
  // }
  // return str

  return str.padStart(targetLength, '0');
}
/**
 * 金钱，分转元，带两位小数
 */

export function fullMoney(price) {
  if (!price) return '0.00';
  return (price / 100).toFixed(2).toString();
}
/**
 * 去除html标签
 */

export function removeHtmltag(str) {
  return str.replace(/<[^>]+>/g, '');
}
/**
 * 换行符转换成<br />标签
 */

export function changeToHtmltag(str) {
  return str.replace(/\r?\n/g, '<br />');
}
/**
 * 字符串首字母大写
 */

export var fistLetterUpper = str => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};
/**
 * 手机号中间四位变成*
 */

export var telFormat = tel => {
  tel = String(tel);
  return tel.substr(0, 3) + '****' + tel.substr(7);
};