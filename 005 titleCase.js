/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-21 09:47:08 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-21 11:20:52
 */

function titleCase(str) {
    let $str = str.split(' ') // 转成数组
    console.log($str);
    let arr = []
    $str.forEach(element => {
        let _a = element.toLowerCase();//转成小写
        let a = _a.charAt(0) //提取首字母
        let b = a.toUpperCase();  // 首字母大写
        let c = new RegExp(a); //建立首字母大写正则
        let d = _a.replace(c, b) // 替换
        arr.push(d)
    });
    console.log(arr.join(' '));
    return arr.join(' ');
}

/**
 *for + replace()
 *
 * @param {*} str
 * @returns
 */
function $titleCase(str) {
    let arr = str.toLowerCase().split(' ')
    for (let i = 0, len = arr.length; i < len; i++) {
        let char = arr[i].charAt(0)
        arr[i] = arr[i].replace(char, (char) => {
            return char.toUpperCase();
        })
    }
    return arr.join(' ')
}
/**
 *map() + replace()
 *
 * @param {*} str
 * @returns
 */
function $$titleCase(str) {
    let arr = str.toLowerCase().split(' ');
    // console.log('​function$$titleCase -> arr', arr);
    var result = arr.map((val) => {
        // console.log('​function$$titleCase -> val', val);
        return val.replace(val.charAt(0), val.charAt(0).toUpperCase())
    })
    // console.log('​function$$titleCase -> result', result);
    return result.join(' ')
}







/**
 *RegExp
 * 利用正则匹配 将字符串分割成单词。
 * 
 * @param {*} str
 * @returns
 */
function $$$titleCase(str) {
    let _str = str.replace(/\w\S*/g, (word) => {
        console.log('​function$$$titleCase -> word', word);
        console.log('​function$$$titleCase -> word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()', word.charAt(0).toUpperCase() + word.substr(1).toLowerCase());
        console.log(word.substr(1));
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
    })
    console.log(_str);
}

/**
 *
 *将字符串转成小写， 匹配到首字母，将首字母转成大写。
 * @param {*} str
 */
function $$$$titleCase(str) {
    return str.toLowerCase().replace(/( |^)\w/g, (L) => L.toUpperCase())
    // let a = str.toLowerCase().replace(/( |^)\w/g, (L) => L.toUpperCase())
    // console.log(a);
    
    // return a
}
















// titleCase("I'm a little tea pot");
$$$$titleCase("sHoRt AnD sToUt")
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")


