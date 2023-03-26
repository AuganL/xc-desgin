// // const JWT = require("../../util/jwt")
// // const token = JWT.generate(user,'10s')

// // // 引用用户模版数据
// const User = require('../model/user');

// const userController = {
//   showUser: async function(req,res,next){
//     try{
//       let userData = await User.all()
//       res.json({
//         code: 200,
//         message: "操作成功",
//         data: userData
//       })
//     }catch(e){
//       res.json({ code: 0, message: "操作失败", data: e })
//     }
//   },
// }

// module.exports = userController;
