const jsonWebToken = require('jsonwebtoken')
const secret = 'croyste'
const JWT = {
    // 创建token  value是登录信息 secret密钥 expires过期时间 
    generate(value, exprires) {
        return jsonWebToken.sign(value, secret, {
            expiresIn: exprires
        })
    },
    // token解析
    verify(token) {
        try {
            return jsonWebToken.verify(token, secret)
        }catch(e){
            return false
        }
    }
}

module.exports = JWT