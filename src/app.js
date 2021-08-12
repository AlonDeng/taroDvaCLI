/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 09:34:18
 * @LastEditTime: 2021-08-12 15:36:01
 * @LastEditors: alon
 */
import { Component } from 'react'
import {createDva} from '@utils';

import models from './models/index';
import './app.scss'

// 创建dva
const app = createDva({
  initialState: {},
  models, // 传入dva models
  onError(error) {
    console.log("🚀 ~ file: index.js ~ line 25 ~ onError ~ error", error)
    error.preventDefault();
  },
});

class App extends Component {
  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return app.start(this.props.children)
  }
}

export default App
