/**
 * 判断是否为浏览器环境
 */
export declare const inBrowser: boolean;
/**
 * 判断__proto__是否可用
 */
export declare const hasProto: boolean;
/**
 * 判断是否为对象类型
 */
export declare function isObject(val: unknown): boolean;
/**
 * 判断是否为普通对象类型
 */
export declare function isPlainObject(val: unknown): val is object;
/**
 * 判断是否为数组
 */
export declare function isArray(val: unknown): val is Array<any>;
/**
 * 判断是否为正则
 */
export declare function isRegExp(val: unknown): val is RegExp;
/**
 * 判断是否为Date类型
 */
export declare function isDate(val: unknown): val is Date;
/**
 * 判断是否为函数类型
 */
export declare function isFunction(val: unknown): val is Function;
/**
 * 判断是否为Promise类型
 */
export declare function isPromise<T = any>(val: any): val is Promise<T>;
/**
 * 判断是否为有效时间
 */
export declare const INVALID_DATE = "Invalid Date";
export declare function isValidDate(val: any): boolean;
/**
 * 是否为微信浏览器
 */
export declare const isWechat: boolean;
/**
 * 判断是否为企业微信浏览器
 */
export declare const isWorkWechat: boolean;
/**
 * 是否为iOS环境
 */
export declare const isIos: boolean;
/**
 * 是否为安卓环境
 */
export declare const isAndroid: boolean;
/**
 * 判断是否为 url
 */
export declare function isUrl(val: string): boolean;
/**
 * 判断是否为手机号
 */
export declare function isMobile(val: string): boolean;
/**
 * 判断是否为邮箱
 */
export declare function isEmail(val: string): boolean;
/**
 * 判断是否为合法身份证号
 */
export declare function isCardID(val: string): boolean;
/**
 * 判断是否在iframe内
 */
export declare function isIframe(): boolean;
/**
 * 判断任意两个变量是否相等
 */
export declare function looseEqual(a: any, b: any): boolean;
