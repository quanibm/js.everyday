/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-20 13:57:58 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-20 14:10:51
 */

// function factorial(num) {
//     var _num = 1;
//     for (let i = num; i >= 0; i--) {
//         _num *= i;
//     }
//     return _num;
// }
function factorial(num) {
    var _num = 1;
    for (let i = 1; i <= num; i++) {
        _num *= i;
    }
    return _num;
}

console.log(factorial(5));
