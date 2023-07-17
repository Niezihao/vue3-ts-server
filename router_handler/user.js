/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:57:27
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 17:18:15
 * @FilePath: \vue3-ts-server\router_handler\user.js
 */
/**
 * 在这里定义和用户相关的路由处理函数，供 /router/user.js 模块进行调用
 */
// 引入用户模型
const UsersModel = require('../model/users');

// 1. 导入需要的验证规则对象
const {
    user_login_schema,
    add_user_schema,
} = require('../schema/user');

// 导入bcryptjs加密模块
const bcrypt = require('bcryptjs');




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

// 添加用户的处理函数
exports.addUser = (req, res) => {
    // 验证入参，错误时抛出以捕获
    const { error, value } = add_user_schema.validate(req.body);
    if (error) {
        throw error;
    }
    // 查询是否存在相同用户名
    UsersModel.findAll({
        where: {
            username: value.username
        }
    }).then((result) => {
        if (result && result.length)
            return res.send({
                code: 1,
                message: '用户名被占用，请更换后重试！',
                data: null
            });
        else {
            const password = value.password;
            // 加密
            value.password = bcrypt.hashSync(password, 10);
            const result = UsersModel.create(value);
            result.then(function (ret) {
                if (ret) {
                    return res.send({
                        code: 0,
                        message: '新增成功',
                        data: ret
                    });
                } else {
                    return res.send({
                        code: 1,
                        message: ret,
                        data: null
                    });
                }
            });
        }
    });
};
