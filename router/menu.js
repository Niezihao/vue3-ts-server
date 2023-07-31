/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-27 15:37:32
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-31 14:59:40
 * @FilePath: \vue3-ts-server\router\menu.js
 */
const express = require('express');
// 创建路由对象
const router = express.Router();
const handler = require('../router_handler/menu');

// 获取菜单列表
router.get('/listMenu', handler.getMenuList);
// 获取菜单项
router.get('/listMenuOptions', handler.getMenuOptions);
// 添加菜单
router.post('/addMenu', handler.addMenu);
// 修改菜单
router.post('/editMenu', handler.editMenu);
// 删除菜单
router.post('/delMenu', handler.deleteMenu);
// 根据id获取菜单信息接口
router.get('/getMenu', handler.getOneMenu);

module.exports = router;
