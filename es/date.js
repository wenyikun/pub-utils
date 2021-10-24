import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import { padZero } from './string';
import { INVALID_DATE, isValidDate, isDate } from './validate';

function meridiem(hour, isLowercase) {
  var m = hour < 12 ? 'AM' : 'PM';
  return isLowercase ? m.toLowerCase() : m;
}
/**
 * 时间格式转换
 * @param time 时间
 * @param pattern 格式，如'YYYY-MM-DD HH:mm:ss'
 */


export function parseDatetime(time, pattern = 'YYYY-MM-DD HH:mm:ss') {
  if (!isValidDate(time)) {
    return INVALID_DATE;
  }

  if (pattern === 'date') {
    pattern = 'YYYY-MM-DD';
  } else if (pattern === 'time') {
    pattern = 'HH:mm:ss';
  } else if (pattern === 'hm') {
    pattern = 'HH:mm';
  }

  var date = isDate(time) ? time : new Date(time);
  var year = date.getFullYear();
  var month = date.getMonth();
  var day = date.getDate();
  var hour = date.getHours();
  var minute = date.getMinutes();
  var second = date.getSeconds();
  var matches = {
    YY: String(year).slice(-2),
    YYYY: String(year),
    M: String(month + 1),
    MM: padZero(month + 1),
    D: String(day),
    DD: padZero(day),
    H: String(hour),
    HH: padZero(hour),
    h: hour % 12 || 12,
    hh: padZero(hour % 12 || 12),
    a: meridiem(hour, true),
    A: meridiem(hour, false),
    m: String(minute),
    mm: padZero(minute),
    s: String(second),
    ss: padZero(second)
  };
  return pattern.replace(/Y{2,4}|M{1,2}|D{1,2}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}/g, match => matches[match]);
}
/**
 * 距离当前时间计算格式化
 * @param time 时间
 */

export function friendlyDateTime(time) {
  if (!isValidDate(time)) {
    return INVALID_DATE;
  }

  var fromNow = (new Date().valueOf() - time) / 1000;
  var fromNowStr = '';
  var oneMinute = 60;
  var oneHour = 60 * 60;
  var oneDay = 60 * 60 * 24;
  var eightDays = 60 * 60 * 24 * 8;

  if (fromNow <= oneMinute) {
    fromNowStr = '1分钟前';
  } else if (fromNow >= oneMinute && fromNow < oneHour) {
    fromNowStr = Math.floor(fromNow / oneMinute) + '分钟前';
  } else if (fromNow >= oneHour && fromNow <= oneDay) {
    fromNowStr = Math.floor(fromNow / oneHour) + '小时前';
  } else if (fromNow >= oneDay && fromNow <= eightDays) {
    fromNowStr = Math.floor(fromNow / oneDay) + '天前';
  } else if (fromNow >= eightDays) {
    fromNowStr = parseDatetime(time, 'YYYY-MM-DD');
  }

  return fromNowStr;
}
/**
 * 时长转换格式
 * @param s 时长，单位秒
 * @param pattern 转换的格式，T(天)，H(小时)，m(分钟)，s(秒)，{}包含替换的位置
 */

export function formatTime(s, pattern = '{s}') {
  var remain = s;
  var timeText = pattern;
  var TReg = /\{T{1,2}\}/;
  var HReg = /\{H{1,2}\}/;
  var mReg = /\{m{1,2}\}/;
  var sReg = /\{s{1,2}\}/;
  var T = 0;
  var H = 0;
  var m = 0; // let d = 0

  var dayTs = 60 * 60 * 24;
  var hourTs = 60 * 60;
  var minuteTs = 60;

  if (TReg.test(pattern)) {
    T = Math.floor(remain / dayTs);
    timeText = timeText.replace(TReg, pattern.search('{T}') === -1 ? padZero(T) : '' + T);
    remain = remain % dayTs;
  }

  if (HReg.test(pattern)) {
    H = Math.floor(remain / hourTs);
    timeText = timeText.replace(HReg, pattern.search('{H}') === -1 ? padZero(H) : '' + H);
    remain = remain % hourTs;
  }

  if (mReg.test(pattern)) {
    m = Math.floor(remain / minuteTs);
    timeText = timeText.replace(mReg, pattern.search('{m}') === -1 ? padZero(m) : '' + m);
    remain = remain % minuteTs;
  }

  if (sReg.test(pattern)) {
    timeText = timeText.replace(sReg, pattern.search('{s}') === -1 ? padZero(remain) : '' + remain);
  }

  return timeText;
}