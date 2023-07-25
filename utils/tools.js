/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-25 17:41:08
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-25 17:41:28
 * @FilePath: \vue3-ts-server\utils\tools.js
 */
/**
 * 获取两个数组差集
 * @param arr1
 * @param arr2
 * @returns {*[]}
 */
const minustArr = function (arr1 = [], arr2 = []) {
    return arr1.filter(function (v) {
        return arr2.indexOf(v) === -1;
    });
};
// 导出工具方法
module.exports = {
    minustArr
};