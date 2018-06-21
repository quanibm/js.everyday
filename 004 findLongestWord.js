/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-21 09:36:24 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-21 09:44:02
 */



function findLongestWord(str) {
    let _str = str.split(' '), longest = 1;
    _str.forEach(element => {
        if (longest <= element.length) {
            longest = element.length;
        }
    });
    return longest;
}

findLongestWord("The quick brown fox jumped over the lazy dog");