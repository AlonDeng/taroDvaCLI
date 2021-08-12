/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 10:54:39
 * @LastEditTime: 2021-08-12 10:55:44
 * @LastEditors: alon
 */
import Taro from "@tarojs/taro";

/*获取当前页url*/
export const getCurrentPageUrl = () => {
  let pages = Taro.getCurrentPages();
  let currentPage = pages[pages.length - 1];
  let url = currentPage.route;
  return url;
}

export const pageToLogin = () => {
  let path = getCurrentPageUrl()
  if (!path.includes('Login')) {
    Taro.navigateTo({
      url: "/pages/Login/Login"
    });
  }
}