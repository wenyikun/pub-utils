/**
 * 生成指定范围随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 范围内值
 */
export declare const randomNum: (min: number, max: number) => number;
/**
 * 数字千分位分隔
 * @param n 任意数字
 * @returns 逗号分割字符串
 */
export declare const format: (n: number) => string;
/**
 * 防抖
 */
export declare const debounce: (fn: Function, delay: number) => (...args: any[]) => void;
/**
 * 节流
 */
export declare const throttle: (fn: Function, delay: number) => (...args: any[]) => void;
/**
 * 加载js文件
 * @param src 文件
 */
export declare function loadScript(src: string): Promise<any>;
/**
 * 根据url地址下载
 * @param url 下载地址
 */
export declare function download(url: string): true | undefined;
/**
 * 复制文本到剪贴板
 */
export declare function copyText(text: string): void;
/**
 * 图片链接转base64
 */
export declare function imgUrlToBase64(url: string): Promise<unknown>;
/**
 * 图片链接转blob url
 */
export declare function imgUrlToBlob(url: string): Promise<unknown>;
/**
 * 缓存函数
 */
export declare function memoize(func: Function, content: Object): (...keys: string[]) => any;
