/**
 * 添加返回历史记录链接
 */
export function addHistoryUrl(url: string) {
  const current = window.location.href
  window.history.replaceState(null, '', url)
  window.history.pushState(null, '', current)
}

/**
 * 获取网址参数对应键名的值
 * @param name 键名
 */
export function getQueryString(name: string): string | null {
  return new URLSearchParams(window.location.search).get(name)
}

/**
 * 构建url
 * @param url 初始链接
 * @param data 查询参数，可配置JSON和字符串类型
 */
export function buildUrl(url = '', data?: string | { [Propname: string]: any }): string {
  const Url = new URL(url)
  const Search = new URLSearchParams(data)
  Search.forEach((value: any, key: string) => {
    if (Url.searchParams.has(key)) {
      Url.searchParams.delete(key)
    }
    Url.searchParams.append(key, value)
  })
  return Url.toString()
}
