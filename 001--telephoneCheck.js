
/**
 *如果传入字符串是一个有效的美国电话号码，则返回 true.
 *
 * @param {*} str
 * @returns
 */


function telephoneCheck(str) {
    var matchStr = /^(((1(\s|))|)\([1-9]{3}\)(\s|-|)[1-9]{3}(\s|-|)[1-9]{4})$/;
    var matchStr2 = /^(((1(\s)|)|)[1-9]{3}(\s|-|)[1-9]{3}(\s|-|)[1-9]{4})$/;
    return matchStr.test(str) || matchStr2.test(str)
    //   return (str.match(matchStr) != null||str.match(matchStr2)!=null);
}



function telephoneCheck(str) {
    var reg1 = /^((1(\s|))|)/;
}
telephoneCheck('27576227382');