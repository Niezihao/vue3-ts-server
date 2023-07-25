/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-24 16:58:33
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-25 17:00:23
 * @FilePath: \vue3-ts-server\model\users-roles.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const Sequelize = require('sequelize')
const moment = require('moment')
const sequelize = require('./init')

// 定义表的模型
const UsresRolesModel = sequelize.define('users_roles', {
  user_role_id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  role_id: {
    type: Sequelize.INTEGER
  },
  user_id: {
    type: Sequelize.INTEGER
  },
  create_time: {
    type: Sequelize.DATE,
    defaultValue: Sequelize.NOW,
    get() {
      return moment(this.getDataValue('create_time')).format('YYYY-MM-DD HH:mm:ss')
    }
  }
})

module.exports = UsresRolesModel
