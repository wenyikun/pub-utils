/**
 * 转换对应长度字符串
 * @param num 初始值
 * @param targetLength 增加0到对应长度
 */
export declare function padZero(num: number | string, targetLength?: number): string;
/**
 * 金钱，分转元，带两位小数
 */
export declare function fullMoney(price?: number): string;
/**
 * 去除html标签
 */
export declare function removeHtmltag(str: string): string;
/**
 * 换行符转换成<br />标签
 */
export declare function changeToHtmltag(str: string): string;
/**
 * 字符串首字母大写
 */
export declare const fistLetterUpper: (str: string) => string;
/**
 * 手机号中间四位变成*
 */
export declare const telFormat: (tel: string | number) => string;
