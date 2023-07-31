/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-27 11:09:02
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-31 12:11:01
 * @FilePath: \vue3-ts-server\router\role.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
// 创建路由对象
const router = express.Router();
const roleHandler = require('../router_handler/role');

// 分页获取角色列表
router.get('/listRole', roleHandler.getList);
// 获取所有角色
router.get('/allRole', roleHandler.getAllRole);
// 添加角色
router.post('/addRole', roleHandler.addRole);
// 获取角色资源
router.get('/roleResource', roleHandler.getRoleResource);
// 更新角色资源
router.post('/updateRoleResource', roleHandler.updateRoleResource);
// 修改角色
router.post('/editRole', roleHandler.editRole);
// 删除角色
router.post('/delRole', roleHandler.deleteRole);
// 根据id获取用户信息接口
router.get('/getRole', roleHandler.getOneRole);

module.exports = router;
