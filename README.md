# pub-utils 通用方法库

*浏览器中使用的JavaScript通用方法。*

## 安装

```shell
npm i --save-dev pub-utils
```

## 使用

```js
import { inBrowser } from 'pub-utils'
```

## API

### date

parseDatetime：时间格式转换

friendlyDateTime：距离当前时间计算格式化

formatTime：时长转天、小时、分钟等格式

### storage

setCookie：设置cookie

getCookie：获取对应键名的cookie值

delCookie：删除对应键名的cookie

### string

padZero：补充0到对应长度字符串

fullMoney：金钱，分转元，带两位小数

removeHtmltag：去除html标签

changeToHtmltag：换行符转换成<br />标签

fistLetterUpper：字符串首字母大写

telFormat：手机号中间四位变成*

### tool

randomNum：生成指定范围随机数

format：数字千分位分隔

debounce：简单防抖

throttle：简单节流

loadScript：加载js文件

download：根据url地址下载

copyText：复制文本到剪贴板

imgUrlToBase64：图片链接转base64

imgUrlToBlob：图片链接转blob url

memoize：缓存函数

### url

addHistoryUrl：添加返回历史记录链接

getQueryString：获取网址参数对应键名的值

buildUrl：构建url

### validate

inBrowser：判断是否为浏览器环境

hasProto：判断__proto__是否可用

isObject：判断是否为对象类型

isPlainObject：判断是否为普通对象类型

isArray：判断是否为数组

isRegExp：判断是否为正则

isDate：判断是否为Date类型

isFunction：判断是否为函数类型

isPromise：判断是否为Promise类型

isValidDate：判断是否为有效时间

isWechat：是否为微信浏览器

isWorkWechat：判断是否为企业微信浏览器

isIos：是否为iOS环境

isAndroid：是否为安卓环境

isUrl：判断是否为 url

isMobile：判断是否为手机号

isEmail：判断是否为邮箱

isCardID：判断是否为合法身份证号

isIframe：判断是否在iframe内

looseEqual：判断任意两个变量是否相等


