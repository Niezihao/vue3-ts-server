/*
 * @Author: niezihao 1332421989@qq.com
 * @Date: 2023-07-17 11:51:24
 * @LastEditors: niezihao 1332421989@qq.com
 * @LastEditTime: 2023-07-17 16:22:02
 * @FilePath: \vue3-ts-server\app.js
 */
// 导入 express 模块
const express = require('express')
// 创建 express 的服务器实例
const app = express()
// 导入并注册用户路由模块
const userRouter = require('./router/user')
// 导入 cors 中间件
const cors = require('cors')
// 将 cors 注册为全局中间件
app.use(cors())
const bodyParser = require('body-parser');
app.use(
    bodyParser.urlencoded({
        extended: true
    })
);
app.use(bodyParser.json());
app.use('/user', userRouter)

// 此段代码要放置在路由之后才可捕获到错误
// 导入验证规则中间件
const joi = require('joi');
// 定义错误级别的中间件
app.use((err, req, res, next) => {
    // 数据验证失败
    if (err instanceof joi.ValidationError) return res.send({ code: 1, message: err.message });
    // 未知错误
    return res.send({ code: 500, message: err });
});


// 调用 app.listen 方法，指定端口号并启动web服务器
app.listen(9999, function () {
    console.log('api server running at http://127.0.0.1:9999')
})
