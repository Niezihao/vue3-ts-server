/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 16:55:58
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 17:04:46
 * @FilePath: \vue3-ts-server\utils\redis.js
 */

// 导入ridis
const redis = require('redis');
// 导入配置
const config = require('../config/index');

const client = redis.createClient(config.post, config.url);

client.on('error', function (err) {
    console.log('Error ' + err);
});

client.on('connect', () => {
    console.log('redis connect success');
});

client.auth(config.password);

// 要导出的对象
const redisConnect = {};
/**
 * 写入数据库函数
 * @param {*} key 设置属性key
 * @param {*} value 设置属性值
 * @param {*} expire 过期时间
 * @returns 
 */
redisConnect.setKey = (key, value, expire) => {
    return new Promise((resolve, reject) => {
        client.set(key, value, (err, replay) => {
            if (err) {
                reject(err);
            }
            if (!isNaN(expire) && expire > 0) {
                client.expire(key, parseInt(expire));
            }
            resolve(replay);
        });
    });
};

/**
 * 读取数据库函数
 * @param {*} key 读取的属性key
 * @returns 
 */
redisConnect.getKey = (key) => {
    return new Promise((resolve, reject) => {
        client.get(key, (err, replay) => {
            if (err) {
                reject(err);
            } else {
                resolve(replay);
            }
        });
    });
};
// 导出
module.exports = redisConnect;
