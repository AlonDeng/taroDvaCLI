/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 17:10:54
 * @LastEditTime: 2021-08-11 17:11:40
 * @LastEditors: alon
 */
import React from 'react'
import { View, Text } from '@tarojs/components'
import { useDispatch, useSelector } from 'react-redux';

import './DisCover.scss'

const DisCover = (props) => {
  const _state = useSelector((state) => state);
  console.log("🚀 ~ file: index.jsx ~ line 34 ~ DisCover ~ props", props, _state)
  return (
    <View className='index'>
      <Text>DisCover</Text>
    </View>
  );
};

export default DisCover