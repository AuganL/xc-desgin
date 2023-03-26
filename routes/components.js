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




// 更新数据
router.post('/calendar/update', calendarController.upData)
router.post('/timeSelector/update', timeSelectorController.upData)
router.post('/list/update', listController.upData)
router.post('/configuredForm/update', configuredFormController.upData)
router.post('/dateSelector/update', dateSelectorFormController.upData)
router.post('/countdown/update', countdownFormController.upData)
router.post('/navigationMenu/update', navigationMenuController.upData)
router.post('/notificationMenu/update', notificationMenuController.upData)
router.post('/progressBar/update', progressBarController.upData)
router.post('/provincialMunicipalSelector/update', provincialMunicipalSelectorController.upData)
router.post('/rotationVerification/update', rotationVerificationController.upData)
router.post('/sliderVerification/update', sliderVerificationController.upData)
router.post('/table/update', tableController.upData)
router.post('/trendMrker/update', trendMrkerController.upData)

 //删除
router.post('/calendar/delete', calendarController.delete)
router.post('/timeSelector/delete', timeSelectorController.delete)
router.post('/list/delete', listController.delete)
router.post('/configuredForm/delete', configuredFormController.delete)
router.post('/dateSelector/delete', dateSelectorFormController.delete)
router.post('/countdown/delete', countdownFormController.delete)
router.post('/navigationMenu/delete', navigationMenuController.delete)
router.post('/notificationMenu/delete', notificationMenuController.delete)
router.post('/progressBar/delete', progressBarController.delete)
router.post('/provincialMunicipalSelector/delete', provincialMunicipalSelectorController.delete)
router.post('/rotationVerification/delete', rotationVerificationController.delete)
router.post('/sliderVerification/delete', sliderVerificationController.delete)
router.post('/table/delete', tableController.delete)
router.post('/trendMrker/delete', trendMrkerController.delete)


// insert
router.post('/calendar/insert', calendarController.insert)
router.post('/timeSelector/insert', timeSelectorController.insert)
router.post('/list/insert', listController.insert)
router.post('/configuredForm/insert', configuredFormController.insert)
router.post('/dateSelector/insert', dateSelectorFormController.insert)
router.post('/countdown/insert', countdownFormController.insert)
router.post('/navigationMenu/insert', navigationMenuController.insert)
router.post('/notificationMenu/insert', notificationMenuController.insert)
router.post('/progressBar/insert', progressBarController.insert)
router.post('/provincialMunicipalSelector/insert', provincialMunicipalSelectorController.insert)
router.post('/rotationVerification/insert', rotationVerificationController.insert)
router.post('/sliderVerification/insert', sliderVerificationController.insert)
router.post('/table/insert', tableController.insert)
router.post('/trendMrker/insert', trendMrkerController.insert)


module.exports = router;
