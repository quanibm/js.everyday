/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-22 16:21:45 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-22 16:51:51
 */



/**
 *es6 的max方
 *
 * @param {*} arr
 * @returns
 */
function largestOfFour(arr) {
    let _arr = [];
    arr.forEach(element => {
        _arr.push(Math.max(...element))
    });
    return _arr;
}

// function _toConsumableArray(arr) {
//     if (Array.isArray(arr)) {
//         for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
//             arr2[i] = arr[i];
//         } return arr2;
//     } else {
//         return Array.from(arr);
//     }
// }

// function largestOfFour(arr) {
//     var _arr = [];
//     arr.forEach(function (element) {
//         _arr.push(Math.max.apply(Math, _toConsumableArray(element)));
//     });
//     return _arr;
// }



largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);

