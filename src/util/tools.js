/** 这个文件中封装了一些常用的工具函数 **/

const tools = {
  /*
    保留N位小数
    最终返回的是字符串
    若转换失败，返回参数原值
    @params
      str - 数字或字符串
      x   - 保留几位小数点
  */
  pointX(str, x = 0) {
    if (!str && str !== 0) { return str; }
    const temp = Number(str);
    if (temp === 0) {
      return temp.toFixed(x);
    }
    return temp ? temp.toFixed(x) : str;
  },

  /*
     去掉字符串两端空格
  */
  trim(str) {
    const reg = /^\s*|\s*$/g;
    return str.replace(reg, '');
  },

  /*
    给字符串打马赛克
    如：将123456转换为1****6，最多将字符串中间6个字符变成*
    如果字符串长度小于等于2，将不会有效果
  */
  addMosaic(str) {
    const s = String(str);
    const lenth = s.length;
    const howmuch = (() => {
      if (s.length <= 2) {
        return s.length;
      }
      const l = s.length - 2;
      if (l <= 6) { return l; }
      return 6;
    })();
    const start = Math.floor((lenth - howmuch) / 2);
    const ret = s.split('').map((v, i) => {
      if (i >= start && i < start + howmuch) {
        return '*';
      }
      return v;
    });
    return ret.join('');
  },
  /*
    字符串加密
    简单的加密方法
  */
  compile(code) {
    let c = String.fromCharCode(code.charCodeAt(0) + code.length);
    for (let i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) + code.charCodeAt(i - 1));
    }
    console.log('加谜：', code, c);
    return c;
  },
  /*
    字符串解谜
    对应上面的字符串加密方法
  */
  uncompile(code) {
    let c = String.fromCharCode(code.charCodeAt(0) - code.length);
    for (let i = 1; i < code.length; i++) {
      c += String.fromCharCode(code.charCodeAt(i) - c.charCodeAt(i - 1));
    }
    console.log('解谜：', code, c);
    return c;
  },
};

export default tools;
