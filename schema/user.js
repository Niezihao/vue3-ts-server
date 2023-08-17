/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 16:17:06
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-08-17 10:37:44
 * @FilePath: \vue3-ts-server\schema\user.js
 */
let joi = require('joi');
// 允许未设置规则的未知键
joi = joi.defaults((schema) =>
    schema.options({
        allowUnknown: true
    })
);
/**
 * string() 值必须是字符串
 * alphanum() 值只能是包含 a-zA-Z0-9 的字符串
 * min(length) 最小长度
 * max(length) 最大长度
 * required() 值是必填项，不能为 undefined
 * pattern(正则表达式) 值必须符合正则表达式的规则
 */
// 用户id的校验规则
const user_id = joi.number().min(0).required();
// 用户名的校验规则
const username = joi.string().alphanum().min(1).max(10).required();
// 密码的验证规则
const password = joi
    .string()
    .pattern(/^[\S]{6,12}$/)
    .required();
const checkCode = joi.string().alphanum().min(4).max(4).required();
const uuid = joi.number().required();
const nickname = joi.string();
const email = joi.string().email();
const status = joi.number().valid(0, 1);
const role_ids = joi.array().items(joi.number()).required();
const user_ids = [joi.array().items(joi.number()).required(), joi.number()];

// 登录表单的验证规则对象
exports.user_login_schema = joi.object().keys({
    username,
    password,
    checkCode,
    uuid
});

// 校验添加用户接口入参
exports.add_user_schema = joi.object().keys({
    username,
    password,
    role_ids,
    status
});

const pageSize = joi.number().required();
const currentPage = joi.number().required();

// 获取用户列表接口
exports.get_list = joi.object().keys({
    pageSize,
    currentPage,
    status
});

// 更新用户接口
exports.update_user_schema = joi.object().keys({
    username: joi.string().alphanum().min(1).max(10),
    status,
    nickname,
    email,
    role_ids   // 角色id数组
});

// 根据id获取用户信息
exports.get_userInfoById_schema = joi.object().keys({
    user_id
  });
// 删除用户接口
exports.delete_user_schema = joi.object().keys({
    user_ids
});