/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-22 16:53:25 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-22 17:12:16
 */

/**
 *es6 
 *
 * @param {*} str
 * @param {*} target
 * @returns
 */
// function confirmEnding(str, target) {
//     return str.endsWith(target);
// }



function confirmEnding(str, target) {
    console.log(str.length);
    console.log(target.length);
    console.log((str.length - target.length));
    console.log(str.substr(str.length - target.length) === target)
    return str.substr(str.length - target.length) === target;
}






confirmEnding("Bastian", "adad");