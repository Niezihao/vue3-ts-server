/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-27 14:32:07
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-27 14:32:20
 * @FilePath: \vue3-ts-server\model\roles-menus.js
 */
const Sequelize = require('sequelize');
const moment = require('moment');
const sequelize = require('./init');

// 定义表的模型
const RolesMenusModel = sequelize.define('roles_menus', {
    role_menu_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    role_id: {
        type: Sequelize.INTEGER
    },
    menu_id: {
        type: Sequelize.INTEGER
    },
    create_time: {
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW,
        get() {
            return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss');
        }
    }
});

module.exports = RolesMenusModel;

