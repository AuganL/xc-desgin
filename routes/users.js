/*
 * @Author: croy 
 * @Date: 2023-03-20 16:24:34
 * @LastEditors: croy 
 * @LastEditTime: 2023-03-20 16:51:09
 * @FilePath: /xc-admin/serve/express/routes/users.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var express = require('express');
var router = express.Router();
const userController = require('../controllers/userControllers');
const calendarController = require('../controllers/calendar');
const timeSelectorController = require('../controllers/timeSelector');
const listController = require('../controllers/list');
const configuredFormController = require('../controllers/configuredForm');
const dateSelectorFormController = require('../controllers/dateSelector');
const countdownFormController = require('../controllers/countdown');
const navigationMenuController = require('../controllers/navigationMenu');
const notificationMenuController = require('../controllers/notificationMenu');
const progressBarController = require('../controllers/progressBar');
const provincialMunicipalSelectorController = require('../controllers/provincialMunicipalSelector');
const rotationVerificationController = require('../controllers/rotationVerification');
const sliderVerificationController = require('../controllers/sliderVerification');
const tableController = require('../controllers/table');
const trendMrkerController = require('../controllers/trendMrker');




// 获取信息
router.get('/', userController.showUser)
router.get('/calendar', calendarController.showUser)
router.get('/timeSelector', timeSelectorController.showUser)
router.get('/list', listController.showUser)
router.get('/configuredForm', configuredFormController.showUser)
router.get('/dateSelector', dateSelectorFormController.showUser)
router.get('/countdown', countdownFormController.showUser)
router.get('/navigationMenu', navigationMenuController.showUser)
router.get('/notificationMenu', notificationMenuController.showUser)
router.get('/progressBar', progressBarController.showUser)
router.get('/provincialMunicipalSelector', provincialMunicipalSelectorController.showUser)
router.get('/rotationVerification', rotationVerificationController.showUser)
router.get('/sliderVerification', sliderVerificationController.showUser)
router.get('/table', tableController.showUser)
router.get('/trendMrker', trendMrkerController.showUser)



module.exports = router;
