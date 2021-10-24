import "core-js/modules/es.regexp.exec.js";
import "core-js/modules/es.string.replace.js";
import "core-js/modules/es.promise.js";
import "core-js/modules/es.array.iterator.js";
import "core-js/modules/web.dom-collections.iterator.js";
import "core-js/modules/web.url.js";
import "core-js/modules/web.url-search-params.js";

/**
 * 生成指定范围随机数
 * @param min 最小值
 * @param max 最大值
 * @returns 范围内值
 */
export var randomNum = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
/**
 * 数字千分位分隔
 * @param n 任意数字
 * @returns 逗号分割字符串
 */

export var format = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
/**
 * 防抖
 */

export var debounce = (fn, delay) => {
  var timer = null;
  return function (...args) {
    if (timer) {
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(this, args);
        timer = null;
      }, delay);
    } else {
      fn.apply(this, args);
      timer = setTimeout(() => {
        timer = null;
      }, delay);
    }
  };
};
/**
 * 节流
 */

export var throttle = (fn, delay) => {
  var timer = null;
  return function (...args) {
    if (timer) return;
    fn.apply(this, args);
    timer = setTimeout(() => {
      timer = null;
    });
  };
};
/**
 * 加载js文件
 * @param src 文件
 */

export function loadScript(src) {
  return new Promise((resolve, reject) => {
    var script = document.createElement('script');
    script.src = src;
    document.body.appendChild(script);
    script.onload = resolve;
    script.onerror = reject;
  });
}
/**
 * 根据url地址下载
 * @param url 下载地址
 */

export function download(url) {
  var isChrome = navigator.userAgent.toLowerCase().indexOf('chrome') > -1;
  var isSafari = navigator.userAgent.toLowerCase().indexOf('safari') > -1;

  if (isChrome || isSafari) {
    var link = document.createElement('a');
    link.href = url;

    if (link.download !== undefined) {
      var fileName = url.substring(url.lastIndexOf('/') + 1, url.length);
      link.download = fileName;
    }

    if (document.createEvent) {
      var e = document.createEvent('MouseEvents');
      e.initEvent('click', true, true);
      link.dispatchEvent(e);
      return true;
    }
  }

  if (url.indexOf('?') === -1) {
    url += '?download';
  }

  window.open(url, '_self');
}
/**
 * 复制文本到剪贴板
 */

export function copyText(text) {
  var input = document.createElement('input');
  input.setAttribute('readonly', 'readonly');
  input.setAttribute('value', text);
  document.body.appendChild(input);
  input.focus(); // 添加这个才能选中

  input.setSelectionRange(0, text.length);

  if (document.execCommand('copy')) {
    document.execCommand('copy');
    console.log('复制成功');
  }

  document.body.removeChild(input);
}
/**
 * 图片链接转base64
 */

export function imgUrlToBase64(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(response => response.blob()).then(res => {
      var reader = new FileReader();
      reader.readAsDataURL(res);

      reader.onloadend = function (e) {
        var _e$target;

        resolve((_e$target = e.target) === null || _e$target === void 0 ? void 0 : _e$target.result);
      };
    }).catch(reject);
  });
}
/**
 * 图片链接转blob url
 */

export function imgUrlToBlob(url) {
  return new Promise((resolve, reject) => {
    fetch(url).then(response => response.blob()).then(res => {
      resolve(URL.createObjectURL(res));
    }).catch(reject);
  });
}
/**
 * 缓存函数
 */

export function memoize(func, content) {
  var cache = Object.create(null);
  content = content || this;
  return (...keys) => {
    var key = keys.join('_');

    if (!cache[key]) {
      cache[key] = func.apply(content, keys);
    }

    return cache[key];
  };
}