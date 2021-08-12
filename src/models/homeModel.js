/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 10:51:27
 * @LastEditTime: 2021-08-12 12:00:15
 * @LastEditors: alon
 */
import _ from 'lodash';
import {
  verifiedCodeSend,
  verifiedCodeLogin,
} from '../utils/services/apis/login';

const defaultState = {
};

const delay = (ms = 1000) =>
  new Promise((resolve, reject) => {
    setTimeout(resolve, ms);
  });

export default {
  namespace: 'homeModel',

  state: _.cloneDeep(defaultState),

  subscriptions: {},

  reducers: {
    resetState() {
      return _.cloneDeep(defaultState);
    },
    setState(state, action) {
      return {...state, ...action.payload};
    },

    /**
     * @description 关闭loading
     */
    hideLoading(state, action) {
      return {...state, loading: false, loadInfo: null};
    },

    /**
   * @description 打开loading
     */
    showLoading(state, action) {
      return {
        ...state,
        loading: true,
        loadInfo: action?.info === '' || !action?.info ? '' : action.info,
      };
    },
  },

  effects: {
    /**
     * @description 加载
     */
    *load({}, {put}) {
    },

    /**
     * @description 卸载
     */
    *unload({}, {put}) {
    },
    *login({payload}, {put, call, select}){
      console.log("🚀 ~ file: homeModel.js ~ line 65 ~ *login ~ payload", payload)
      try {
        let result = yield call(verifiedCodeSend, payload);
          console.log('result', result);
      } catch (error) {
      console.log("🚀 ~ file: homeModel.js ~ line 74 ~ *login ~ error", error)
      }
    },
  },
};