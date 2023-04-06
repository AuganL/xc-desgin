import http from 'axios'
import { API_CONFIG } from './config'

// login
async function login(params: any) {return await http.post(API_CONFIG.login.LOGIN,params)}

// select
async function calendar() { return await http.get(API_CONFIG.calendar.GET_DATA) }
async function navigationMenu() { return await http.get(API_CONFIG.navigationMenu.GET_DATA) }
async function notificationMenu() { return await http.get(API_CONFIG.notificationMenu.GET_DATA) }
async function progressBar() { return await http.get(API_CONFIG.progressBar.GET_DATA) }
async function provincialMunicipalSelector() { return await http.get(API_CONFIG.provincialMunicipalSelector.GET_DATA) }
async function rotationVerification() { return await http.get(API_CONFIG.rotationVerification.GET_DATA) }
async function sliderVerification() { return await http.get(API_CONFIG.sliderVerification.GET_DATA) }
async function table() { return await http.get(API_CONFIG.table.GET_DATA) }
async function trendMrker() { return await http.get(API_CONFIG.trendMrker.GET_DATA) }
async function countdown() { return await http.get(API_CONFIG.countdown.GET_DATA) }
async function dateSelector() { return await http.get(API_CONFIG.dateSelector.GET_DATA) }
async function configuredForm() { return await http.get(API_CONFIG.configuredForm.GET_DATA) }
async function list() { return await http.get(API_CONFIG.list.GET_DATA) }
async function timeSelector() { return await http.get(API_CONFIG.timeSelector.GET_DATA) }

// 更新
async function calendarUpdate(params: any) { return await http.post(API_CONFIG.calendar.UP_DATA, params) }
async function navigationMenuUpdate(params: any) { return await http.post(API_CONFIG.navigationMenu.UP_DATA, params) }
async function notificationMenuUpdate(params: any) { return await http.post(API_CONFIG.notificationMenu.UP_DATA, params) }
async function progressBarUpdate(params: any) { return await http.post(API_CONFIG.progressBar.UP_DATA, params) }
async function provincialMunicipalSelectorUpdate(params: any) { return await http.post(API_CONFIG.provincialMunicipalSelector.UP_DATA, params) }
async function rotationVerificationUpdate(params: any) { return await http.post(API_CONFIG.rotationVerification.UP_DATA, params) }
async function sliderVerificationUpdate(params: any) { return await http.post(API_CONFIG.sliderVerification.UP_DATA, params) }
async function tableUpdate(params: any) { return await http.post(API_CONFIG.table.UP_DATA, params) }
async function trendMrkerUpdate(params: any) { return await http.post(API_CONFIG.trendMrker.UP_DATA, params) }
async function countdownUpdate(params: any) { return await http.post(API_CONFIG.countdown.UP_DATA, params) }
async function dateSelectorUpdate(params: any) { return await http.post(API_CONFIG.dateSelector.UP_DATA, params) }
async function configuredFormUpdate(params: any) { return await http.post(API_CONFIG.configuredForm.UP_DATA, params) }
async function listUpdate(params: any) { return await http.post(API_CONFIG.list.UP_DATA, params) }
async function timeSelectorUpdate(params: any) { return await http.post(API_CONFIG.timeSelector.UP_DATA, params) }

// delete
async function calendarDelete(params: any) { return await http.post(API_CONFIG.calendar.DEL_DATA, params) }
async function navigationMenuDelete(params: any) { return await http.post(API_CONFIG.navigationMenu.DEL_DATA, params) }
async function notificationMenuDelete(params: any) { return await http.post(API_CONFIG.notificationMenu.DEL_DATA, params) }
async function progressBarDelete(params: any) { return await http.post(API_CONFIG.progressBar.DEL_DATA, params) }
async function provincialMunicipalSelectorDelete(params: any) { return await http.post(API_CONFIG.provincialMunicipalSelector.DEL_DATA, params) }
async function rotationVerificationDelete(params: any) { return await http.post(API_CONFIG.rotationVerification.DEL_DATA, params) }
async function sliderVerificationDelete(params: any) { return await http.post(API_CONFIG.sliderVerification.DEL_DATA, params) }
async function tableDelete(params: any) { return await http.post(API_CONFIG.table.DEL_DATA, params) }
async function trendMrkerDelete(params: any) { return await http.post(API_CONFIG.trendMrker.DEL_DATA, params) }
async function countdownDelete(params: any) { return await http.post(API_CONFIG.countdown.DEL_DATA, params) }
async function dateSelectorDelete(params: any) { return await http.post(API_CONFIG.dateSelector.DEL_DATA, params) }
async function configuredFormDelete(params: any) { return await http.post(API_CONFIG.configuredForm.DEL_DATA, params) }
async function listDelete(params: any) { return await http.post(API_CONFIG.list.DEL_DATA, params) }
async function timeSelectorDelete(params: any) { return await http.post(API_CONFIG.timeSelector.DEL_DATA, params) }


// insert
async function calendarInsert(params: any) { return await http.post(API_CONFIG.calendar.INSERT_DATA, params) }
async function navigationMenuInsert(params: any) { return await http.post(API_CONFIG.navigationMenu.INSERT_DATA, params) }
async function notificationMenuInsert(params: any) { return await http.post(API_CONFIG.notificationMenu.INSERT_DATA, params) }
async function progressBarInsert(params: any) { return await http.post(API_CONFIG.progressBar.INSERT_DATA, params) }
async function provincialMunicipalSelectorInsert(params: any) { return await http.post(API_CONFIG.provincialMunicipalSelector.INSERT_DATA, params) }
async function rotationVerificationInsert(params: any) { return await http.post(API_CONFIG.rotationVerification.INSERT_DATA, params) }
async function sliderVerificationInsert(params: any) { return await http.post(API_CONFIG.sliderVerification.INSERT_DATA, params) }
async function tableInsert(params: any) { return await http.post(API_CONFIG.table.INSERT_DATA, params) }
async function trendMrkerInsert(params: any) { return await http.post(API_CONFIG.trendMrker.INSERT_DATA, params) }
async function countdownInsert(params: any) { return await http.post(API_CONFIG.countdown.INSERT_DATA, params) }
async function dateSelectorInsert(params: any) { return await http.post(API_CONFIG.dateSelector.INSERT_DATA, params) }
async function configuredFormInsert(params: any) { return await http.post(API_CONFIG.configuredForm.INSERT_DATA, params) }
async function listInsert(params: any) { return await http.post(API_CONFIG.list.INSERT_DATA, params) }
async function timeSelectorInsert(params: any) { return await http.post(API_CONFIG.timeSelector.INSERT_DATA, params) }



export {

    login,
    
    // select
    calendar,
    navigationMenu,
    notificationMenu,
    progressBar,
    provincialMunicipalSelector,
    rotationVerification,
    sliderVerification,
    table,
    trendMrker,
    countdown,
    dateSelector,
    configuredForm,
    list,
    timeSelector,
    // update
    calendarUpdate,
    navigationMenuUpdate,
    notificationMenuUpdate,
    progressBarUpdate,
    provincialMunicipalSelectorUpdate,
    rotationVerificationUpdate,
    sliderVerificationUpdate,
    tableUpdate,
    trendMrkerUpdate,
    countdownUpdate,
    dateSelectorUpdate,
    configuredFormUpdate,
    listUpdate,
    timeSelectorUpdate,
    // delete
    calendarDelete,
    navigationMenuDelete,
    notificationMenuDelete,
    progressBarDelete,
    provincialMunicipalSelectorDelete,
    rotationVerificationDelete,
    sliderVerificationDelete,
    tableDelete,
    trendMrkerDelete,
    countdownDelete,
    dateSelectorDelete,
    configuredFormDelete,
    listDelete,
    timeSelectorDelete,

    // insert
    calendarInsert,
    navigationMenuInsert,
    notificationMenuInsert,
    progressBarInsert,
    provincialMunicipalSelectorInsert,
    rotationVerificationInsert,
    sliderVerificationInsert,
    tableInsert,
    trendMrkerInsert,
    countdownInsert,
    dateSelectorInsert,
    configuredFormInsert,
    listInsert,
    timeSelectorInsert,
}