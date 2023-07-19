/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:54:45
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-19 11:44:07
 * @FilePath: \vue3-ts-server\router\user.js
 */
const express = require('express')
// 创建路由对象
const router = express.Router()

// 导入用户路由处理函数模块
const userHandler = require('../router_handler/user')

// 登录
router.post('/login', userHandler.login)
// 添加用户接口
router.post('/addUser', userHandler.addUser);
// 获取图形验证码
router.get('/checkCode', userHandler.getCheckCode);
// 刷新token
router.post('/refreshToken', userHandler.refreshToken);
// 获取用户列表
router.get('/list', userHandler.getList);
// 修改用户信息
router.post('/editUser/:id', userHandler.editUser);

// 将路由对象共享出去
module.exports = router



