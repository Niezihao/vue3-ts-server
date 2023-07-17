/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 16:27:03
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 16:31:15
 * @FilePath: \vue3-ts-server\utils\token.js
 */

// 导入jsonwebtoken模块
const jwt = require('jsonwebtoken');

// 导入密钥
const tkconf = require('../config/index');

/**
 * 
 * token生成函数
 * @param {*} user 存在token中的信息
 * @param {*} serect 密钥
 * @param {*} time  token存在时间
 * @returns
 */
const addToken = function (user, serect, time) {
    //创建token并导出
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username
        },
        serect,
        { expiresIn: time + 's' }
    );
    return token;
};
/**
 * token解析函数
 * @param {*} token
 * @returns
 */
const decodedToken = function (token) {
    const decoded = jwt.decode(token);
    return decoded;
};
/**
 * 验证对应的refreshToken
 * @param {*} refreshToken
 * @returns
 */
const verifyToken = function verify_refreshToken(refreshToken) {
    return jwt.verify(refreshToken, tkconf.jwtRefrechSecretKey, (err, decode) => {
        return err ? err : 1;
    });
};

module.exports = {
    addToken,
    decodedToken,
    verifyToken
};
