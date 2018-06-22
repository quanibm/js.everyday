/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-22 17:16:12 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-22 17:26:19
 */


/**
 *循环拼接一个指定的字符串 num次，如果num是一个负数,则返回一个空字符串。
 *
 * @param {*} str
 * @param {*} num
 * @returns
 */
function repeat(str, num) {
    var _str = '';
    if (num > 0) {
        for (let i = 0; i < num; i++) {
            _str = _str.concat(str);
        }
    } else {
        _str = '';
    }
    return _str;
}

repeat("abc", -13);
