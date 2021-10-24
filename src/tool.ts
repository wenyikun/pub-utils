/**
 * 生成指定范围随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 范围内值
 */
export const randomNum = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1)) + min

/**
 * 数字千分位分隔
 * @param n 任意数字
 * @returns 逗号分割字符串
 */
export const format = (n: number) => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')

/**
 * 防抖
 */
export const debounce = (fn: Function, delay: number) => {
  let timer: number | null = null
  return function (...args: any[]) {
    if (timer) {
      clearTimeout(timer)
      timer = setTimeout(() => {
        fn.apply(this, args)
        timer = null
      }, delay)
    } else {
      fn.apply(this, args)
      timer = setTimeout(() => {
        timer = null
      }, delay)
    }
  }
}

/**
 * 节流
 */
export const throttle = (fn: Function, delay: number) => {
  let timer: number | null = null
  return function (...args: any[]) {
    if (timer) return
    fn.apply(this, args)
    timer = setTimeout(() => {
      timer = null
    })
  }
}

/**
 * 加载js文件
 * @param src 文件
 */
export function loadScript(src: string): Promise<any> {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.src = src
    document.body.appendChild(script)
    script.onload = resolve
    script.onerror = reject
  })
}

/**
 * 根据url地址下载
 * @param url 下载地址
 */
export function download(url: string) {
  const isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1
  const isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1
  if (isChrome || isSafari) {
    const link = document.createElement('a')
    link.href = url
    if (link.download !== undefined) {
      const fileName = url.substring(url.lastIndexOf('/') + 1, url.length)
      link.download = fileName
    }
    if (document.createEvent) {
      const e = document.createEvent('MouseEvents')
      e.initEvent('click', true, true)
      link.dispatchEvent(e)
      return true
    }
  }
  if (url.indexOf('?') === -1) {
    url += '?download'
  }
  window.open(url, '_self')
}

/**
 * 复制文本到剪贴板
 */
export function copyText(text: string) {
  let input = document.createElement('input')
  input.setAttribute('readonly', 'readonly')
  input.setAttribute('value', text)
  document.body.appendChild(input)
  input.focus() // 添加这个才能选中
  input.setSelectionRange(0, text.length)
  if (document.execCommand('copy')) {
    document.execCommand('copy')
    console.log('复制成功')
  }
  document.body.removeChild(input)
}

/**
 * 图片链接转base64
 */
export function imgUrlToBase64(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.blob())
      .then(res => {
        const reader = new FileReader()
        reader.readAsDataURL(res)
        reader.onloadend = function (e) {
          resolve(e.target?.result)
        }
      })
      .catch(reject)
  })
}

/**
 * 图片链接转blob url
 */
export function imgUrlToBlob(url: string) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then(response => response.blob())
      .then(res => {
        resolve(URL.createObjectURL(res))
      })
      .catch(reject)
  })
}

/**
 * 缓存函数
 */
export function memoize(func: Function, content: Object) {
  let cache = Object.create(null)
  content = content || this
  return (...keys: string[]) => {
    const key = keys.join('_')
    if (!cache[key]) {
      cache[key] = func.apply(content, keys)
    }
    return cache[key]
  }
}
