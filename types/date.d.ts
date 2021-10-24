/**
 * 时间格式转换
 * @param time 时间
 * @param pattern 格式，如'YYYY-MM-DD HH:mm:ss'
 */
export declare function parseDatetime(time: any, pattern?: string): string;
/**
 * 距离当前时间计算格式化
 * @param time 时间
 */
export declare function friendlyDateTime(time: number): string;
/**
 * 时长转换格式
 * @param s 时长，单位秒
 * @param pattern 转换的格式，T(天)，H(小时)，m(分钟)，s(秒)，{}包含替换的位置
 */
export declare function formatTime(s: number, pattern?: string): string;
