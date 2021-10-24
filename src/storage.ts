/**
 * 设置cookie
 * @param name 键名
 * @param value 键值
 * @param days 保存时间，单位天，默认30天
 * @param domain 域
 */
export function setCookie(name: string, value: string, days = 30, domain = '') {
  const exp = new Date()
  exp.setTime(exp.getTime() + days * 24 * 60 * 60 * 1000)
  document.cookie = `${name}=${value};expires=${(exp as any).toGMTString()}; path=/;domain=${domain}`
}

/**
 * 获取对应键名的cookie值
 * @param name 键名
 */
export function getCookie(name: string): string | null {
  let reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr = document.cookie.match(reg)
  if (arr) {
    return unescape(arr[2])
  } else {
    return null
  }
}

/**
 * 删除对应键名的cookie
 * @param name 键名
 */
export function delCookie(name: string) {
  setCookie(name, '', -1)
}

/**
 * 设置localStorage、sessionStorage key前缀
 */
let prefix = ''
export function setPrefix(str: string) {
  prefix = str
}
