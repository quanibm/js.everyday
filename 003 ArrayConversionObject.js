/*
 * @Author: nikolas.zengchunhui 
 * @Date: 2018-06-20 17:38:32 
 * @Last Modified by: nikolas.zengchunhui
 * @Last Modified time: 2018-06-20 17:56:52
 */


/**
 * 将数组转为对象 ---- 适配器模式
 * @param {*} namedata  键名- Array
 * @param {*} valuedata 键值- Array
 * @returns
 */
function arrToObjAdapter(namedata, valuedata) {
    let _Object = {}
    for (let i = 0; i < namedata.length; i++) {
        _Object[namedata[i]] = valuedata[i];
    }
    return _Object;
}