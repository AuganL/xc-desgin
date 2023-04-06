const JWT = require("../util/jwt")

// // 引用用户模版数据
const user = require('../model/user');

const listController = {
  login: async function (req, res, next) {
    try {
      let { username, password } = req.body;
      let token = undefined;
      let result = await user.userByName(username);
      if(result[0]) token = JWT.generate({
        username: username,
        password: password
      },'1000s')
      console.log(token);
      res.header('Authorization', token)
      res.json({ code: 200, message: "登录成功", data: '登录成功' })
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
}

module.exports = listController;
