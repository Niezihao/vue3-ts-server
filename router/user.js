/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:54:45
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-17 10:31:04
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
// 删除用户
router.post('/delUser', userHandler.deleteUser);
// 根据id获取用户信息接口
router.get('/queryUserInfo/:user_id', userHandler.getUserinfoById);
// 将路由对象共享出去
module.exports = router



