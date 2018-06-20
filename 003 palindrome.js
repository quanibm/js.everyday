/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-20 14:14:53 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-20 15:41:02
 */




/**
 *如果给定的字符串是回文，返回true，反之，返回false。
 *palindrome(回文)是指一个字符串忽略标点符号、大小写和空格，正着读和反着读一模一样。
 *
 * @param {*} str
 * @returns
 */
function palindrome(str) {
    // Good luck!
    let _str = str.replace(/[^\w\d]*_*/g, '').toLowerCase();
    return _str.split('').reverse().join('') == _str;
}



let a = palindrome("0_0 (: /-\ :) 0-0");
console.log(a);
