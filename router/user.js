/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:54:45
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 11:59:01
 * @FilePath: \vue3-ts-server\router\user.js
 */
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 登录
router.post('/login', userHandler.login)

// 将路由对象共享出去
module.exports = router



