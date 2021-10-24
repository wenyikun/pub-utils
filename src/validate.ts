const toString = Object.prototype.toString

/**
 * 判断是否为浏览器环境
 */
export const inBrowser = typeof window !== 'undefined'

const UA = inBrowser ? window.navigator.userAgent : ''

/**
 * 判断__proto__是否可用
 */
export const hasProto = '__proto__' in {}

/**
 * 判断是否为对象类型
 */
export function isObject(val: unknown): boolean {
  return val !== null && typeof val === 'object'
}

/**
 * 判断是否为普通对象类型
 */
export function isPlainObject(val: unknown): val is object {
  if (toString.call(val) !== '[object Object]') {
    return false
  }
  const prototype = Object.getPrototypeOf(val)
  return prototype === null || prototype === Object.prototype
}

/**
 * 判断是否为数组
 */
export function isArray(val: unknown): val is Array<any> {
  return toString.call(val) === '[object Array]'
}

/**
 * 判断是否为正则
 */
export function isRegExp(val: unknown): val is RegExp {
  return toString.call(val) === '[object RegExp]'
}

/**
 * 判断是否为Date类型
 */
export function isDate(val: unknown): val is Date {
  return val instanceof Date
}

/**
 * 判断是否为函数类型
 */
export function isFunction(val: unknown): val is Function {
  return typeof val === 'function'
}

/**
 * 判断是否为Promise类型
 */
export function isPromise<T = any>(val: any): val is Promise<T> {
  return isObject(val) && isFunction(val.then) && isFunction(val.catch)
}

/**
 * 判断是否为有效时间
 */
export const INVALID_DATE = 'Invalid Date'
export function isValidDate(val: any): boolean {
  return !(new Date(val).toString() === INVALID_DATE)
}

/**
 * 是否为微信浏览器
 */
export const isWechat: boolean = /MicroMessenger/gi.test(UA)

/**
 * 判断是否为企业微信浏览器
 */
export const isWorkWechat: boolean = isWechat && /wxwork/gi.test(UA)

/**
 * 是否为iOS环境
 */
export const isIos: boolean = /iphone|ipad|ipod|ios/i.test(UA)

/**
 * 是否为安卓环境
 */
export const isAndroid: boolean = UA.indexOf('android') > 0

/**
 * 判断是否为 url
 */
export function isUrl(val: string): boolean {
  const reg =
    /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/i
  return reg.test(val)
}

/**
 * 判断是否为手机号
 */
export function isMobile(val: string): boolean {
  return /^1\d{10}$/.test(val)
}

/**
 * 判断是否为邮箱
 */
export function isEmail(val: string): boolean {
  return /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/.test(val)
}

/**
 * 判断是否为合法身份证号
 */
export function isCardID(val: string): boolean {
  if (!/(^\d{15}$)|(^\d{17}(\d|X|x)$)/.test(val)) {
    return false
  }
  // 身份证城市
  const aCity = {
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
    91: '国外',
  }
  if (!aCity[val.substr(0, 2) as unknown as keyof typeof aCity]) {
    return false
  }

  // 出生日期验证
  const sBirthday = (val.substr(6, 4) + '-' + Number(val.substr(10, 2)) + '-' + Number(val.substr(12, 2))).replace(
      /-/g,
      '/'
    ),
    d = new Date(sBirthday)
  if (sBirthday != d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate()) {
    return false
  }

  // 身份证号码校验
  let sum = 0
  const weights = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const codes = '10X98765432'
  for (let i = 0; i < val.length - 1; i++) {
    sum += Number(val[i]) * weights[i]
  }
  const last = codes[sum % 11] //计算出来的最后一位身份证号码
  if (val[val.length - 1] != last) {
    return false
  }

  return true
}

/**
 * 判断是否在iframe内
 */
export function isIframe(): boolean {
  return window !== top
}

/**
 * 判断任意两个变量是否相等
 */
 export function looseEqual(a: any, b: any): boolean {
  if (a === b) return true
  const isObjectA = isObject(a)
  const isObjectB = isObject(b)
  if (isObjectA && isObjectB) {
    try {
      const isArrayA = Array.isArray(a)
      const isArrayB = Array.isArray(b)
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every((e: any, i: number) => {
          return looseEqual(e, b[i])
        })
      } else if (a instanceof Date && b instanceof Date) {
        return a.getTime() === b.getTime()
      } else if (!isArrayA && !isArrayB) {
        const keysA = Object.keys(a)
        const keysB = Object.keys(b)
        return keysA.length === keysB.length && keysA.every(key => {
          return looseEqual(a[key], b[key])
        })
      } else {
        return false
      }
    } catch (e) {
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}
