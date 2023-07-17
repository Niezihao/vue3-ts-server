/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 15:30:58
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 15:31:06
 * @FilePath: \vue3-ts-server\model\user.js
 */
const Sequelize = require('sequelize');
const moment = require('moment');
const sequelize = require('./init');

// 定义表的模型 define方法第一个参数为表名，第二个参数为表字段对象
const UsersModel = sequelize.define('users', {
    user_id: {
        // 数据类型
        type: Sequelize.INTEGER,
        // 主键
        primaryKey: true,
        // 自增
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING(255)
    },
    nickname: {
        type: Sequelize.STRING(255)
    },
    email: {
        type: Sequelize.STRING(255)
    },
    password: {
        type: Sequelize.CHAR(32)
    },
    user_pic: {
        type: Sequelize.TEXT
    },
    status: {
        type: Sequelize.TINYINT(4),
        defaultValue: 0
    },
    update_time: {
        type: Sequelize.DATE,
        // 格式化日期时间戳
        get() {
            return this.getDataValue('update_time')
                ? moment(this.getDataValue('update_time')).format('YYYY-MM-DD HH:mm:ss')
                : null;
        }
    },
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
});

// 导出用户映射模型
module.exports = UsersModel;
