/**
 * 设置cookie
 * @param name 键名
 * @param value 键值
 * @param days 保存时间，单位天，默认30天
 * @param domain 域
 */
export declare function setCookie(name: string, value: string, days?: number, domain?: string): void;
/**
 * 获取对应键名的cookie值
 * @param name 键名
 */
export declare function getCookie(name: string): string | null;
/**
 * 删除对应键名的cookie
 * @param name 键名
 */
export declare function delCookie(name: string): void;
