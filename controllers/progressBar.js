// const JWT = require("../../util/jwt")
// const token = JWT.generate(user,'10s')

// // 引用用户模版数据
const progressBar = require('../model/progressBar');

const progressBarController = {
  showUser: async function (req, res, next) {
    try {
      let userData = await progressBar.all()
      res.json({
        code: 200,
        message: "操作成功",
        data: userData
      })
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
  upData: async function (req, res, next) {
    try {
      let data = req.body
      let sqlRes = await progressBar.update(data.id, data)
      if (sqlRes) {
        res.json({
          code: 200,
          message: "数据更新成功",
          data: data
        })
      } else {
        res.json({
          code: 000,
          message: "数据更新失败，请检查请求数据",
          data: data
        })
      }
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e })
    }
  },
  delete: async function (req, res, next) {
    try {
      let data = req.body.data
      let sqlRes = await progressBar.delete(data.id)
      if (sqlRes) {
        res.json({
          code: 200,
          message: "数据更新成功",
          data: data
        })
      } else {
        res.json({
          code: 000,
          message: "数据更新失败，请检查请求数据",
          data: data
        })
      }
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e })
    }
  }, insert: async function (req, res, next) {
    try {
      let data = req.body
      let sqlRes = await progressBar.insert(data)
      console.log(sqlRes);
      if (sqlRes) {
        res.json({
          code: 200,
          message: "数据添加成功",
          data: data
        })
      } else {
        res.json({
          code: 000,
          message: "数据添加失败，请检查请求数据",
          data: data
        })
      }
    } catch (e) {
      res.json({ code: 0, message: "操作失败", data: e })
    }
  }
}

module.exports = progressBarController;
