/*
 * @Author: L5250
 * @Description: desc
 * @Date: 2022-08-04 15:56:02
 * @LastEditors: L5250
 * @LastEditTime: 2022-08-04 16:17:52
 */

// 是否是手机
export function getIsMobile() {
    if (/(iPhone | iPad | iPod | ios)/i.test(navigator.userAgent)) {
        return true
    } else if (/(Android)/i.test(navigator.userAgent)) {
        return true
    } else {
        return false
    };

}

// 浏览器型号
export function getBrowserModel() {
    if (/(iPhone | iPad | iPod | ios)/i.test(navigator.userAgent)) {
        return "ios"
    } else if (/(Android)/i.test(navigator.userAgent)) {
        return "android"
    } else {
        return 'other'
    };

}
// qq微信内置浏览器