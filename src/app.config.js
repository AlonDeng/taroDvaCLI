/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 09:34:18
 * @LastEditTime: 2021-08-11 17:53:57
 * @LastEditors: alon
 */
export default {
  pages: [
    'pages/Home/Home',
    'pages/My/My',
    'pages/Discover/Discover',
  ],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  },
  tabBar: {
    color: '#666',
    selectedColor: '#28aaff',
    backgroundColor: '#fafafa',
    borderStyle: 'black',
    list: [
      {
        pagePath: 'pages/Home/Home',
        iconPath: './common/assets/icon/homeNot@2x.png',
        selectedIconPath: './common/assets/icon/homeSel@2x.png',
        text: '首页',
      },
      {
        pagePath: 'pages/Discover/Discover',
        iconPath: './common/assets/icon/discoverNot@2x.png',
        selectedIconPath: './common/assets/icon/discoverSel@2x.png',
        text: '发现',
      },
      {
        pagePath: 'pages/My/My',
        iconPath: './common/assets/icon/myNot@2x.png',
        selectedIconPath: './common/assets/icon/mySel@2x.png',
        text: '我的',
      },
    ],
  },
}
