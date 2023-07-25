/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-25 16:55:01
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-25 16:55:11
 * @FilePath: \vue3-ts-server\model\roles.js
 */
const Sequelize = require('sequelize');
const moment = require('moment');
const sequelize = require('./init');

// 定义表的模型
const RolesModel = sequelize.define('roles', {
    role_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_name: {
        type: Sequelize.STRING(255)
    },
    remark: {
        type: Sequelize.STRING(255)
    },
    status: {
        type: Sequelize.TINYINT,
        defaultValue: 0
    },
    update_time: {
        type: Sequelize.DATE,
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

module.exports = RolesModel;
