/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 09:34:18
 * @LastEditTime: 2021-08-11 14:46:18
 * @LastEditors: alon
 */
// babel-preset-taro 更多选项和默认值：
// https://github.com/NervJS/taro/blob/next/packages/babel-preset-taro/README.md
module.exports = {
  plugins: ["lodash"],
  presets: [
    ['taro', {
      framework: 'react',
      ts: false
    }],
    ["@babel/env", { "targets": { "node": 6 } }]
  ]
}
