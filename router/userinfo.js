/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-31 14:57:01
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-31 14:57:07
 * @FilePath: \vue3-ts-server\router\userinfo.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
// 创建路由对象
const router = express.Router();
const handler = require('../router_handler/userinfo');

// 获取登录用户的基本信息
router.get('/userinfo', handler.getUserinfo);
// 更新登录用户的基本信息
router.post('/updateUserinfo', handler.updateUserInfo);
// 重置密码接口
router.post('/updatePwd', handler.updatepwd);
// 更新头像接口
router.post('/updateAvatar', handler.updateAvatar);

module.exports = router;