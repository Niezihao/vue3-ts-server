/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:57:27
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 15:42:32
 * @FilePath: \vue3-ts-server\router_handler\user.js
 */
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 引入用户模型
const UsersModel = require('../model/users');

// 登录路由的处理函数
exports.login = (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    // 查询数据库用户信息是否存在密码是否正确
    UsersModel.findOne({
        where: {
            username: username
        }
    }).then((result) => {
        if (!result) {
            /*
             * 返回体格式
             * code：0为成功、1为失败
             * message：接口返回信息描述
             * data：接口数据
             */
            return res.send({
                code: 1,
                message: '用户不存在',
                data: null
            });
        } else {
            if (password !== result.password) {
                return res.send({
                    code: 1,
                    message: '密码错误',
                    data: null
                });
            } else {
                res.send({
                    code: 0,
                    message: '登录成功',
                    data: result
                });
            }
        }
    });
};
