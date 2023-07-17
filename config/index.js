/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 16:27:20
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 16:56:48
 * @FilePath: \vue3-ts-server\config\index.js
 */
module.exports = {
    // token密钥
    jwtSecretKey: 'you are the best!',
    jwtRefrechSecretKey: 'be a better one!',
    secretKeyExpire: 60 * 60 * 2,  // 2小时
    refreshSerectKeyExpire: 60 * 60 * 24 * 2,  //2天
    // redis
    post: 6379,
    url: '127.0.0.1',
    password: 123456
}
