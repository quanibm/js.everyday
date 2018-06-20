/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-20 11:50:29 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-20 11:58:16
 */

function reverseString(str) {
    str = str.split('').reverse().join('');
    return str;
}

var a = reverseString('hello')
console.log(a);
