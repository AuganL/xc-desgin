/*
 * @Author: croy 
 * @Date: 2023-03-20 16:24:34
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-20 16:58:59
 * @FilePath: /xc-admin/serve/express/routes/users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const express = require('express');
const listController  = require('../controllers/login')
const router = express.Router();

router.post('/',listController.login);

module.exports = router;
