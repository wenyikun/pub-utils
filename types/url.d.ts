/**
 * 添加返回历史记录链接
 */
export declare function addHistoryUrl(url: string): void;
/**
 * 获取网址参数对应键名的值
 * @param name 键名
 */
export declare function getQueryString(name: string): string | null;
/**
 * 构建url
 * @param url 初始链接
 * @param data 查询参数，可配置JSON和字符串类型
 */
export declare function buildUrl(url?: string, data?: string | {
    [Propname: string]: any;
}): string;
