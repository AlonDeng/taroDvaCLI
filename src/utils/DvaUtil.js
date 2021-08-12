/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-11 10:13:54
 * @LastEditTime: 2021-08-12 15:57:23
 * @LastEditors: alon
 */
import {create} from 'dva-core';
import {Provider} from 'react-redux';
import createLoading from 'dva-loading'
import _ from 'lodash';

let app;
let store;
let models = {};

/**
 * @description 动态复制model
 * @param {string} namespace 需要复制的model名字
 * 使用方法
   import {getDva} from '@utils';
   const [userDetailsNamespace] = useState(getDva().modelExtend('userDetailsModel'));
   const userInfo = useSelector((store) => store[userDetailsNamespace]?.userInfo);
   useEffect(() => {
    dispatch({type: `${userDetailsNamespace}/load`, payload: {memberId: memberId}});
    return () => {
      dispatch({type: `${userDetailsNamespace}/unload`});
      getDva().unmodel(userDetailsNamespace); //**注意卸载model**
    };
   }, []);
 */
const modelExtend = (namespace, id) => {
  console.log(namespace, id);
  const newNamespace = id
    ? `${namespace + id}`
    : `${namespace}_${new Date().valueOf()}`;
  console.log(newNamespace, isHasModels(newNamespace));
  let newModel = _.cloneDeep(models[namespace]);
  newModel.namespace = newNamespace;
  //如果该模块不存在就生成一个新的
  if (!isHasModels(newNamespace)) {
    newModel = models[namespace].createModel(newNamespace);
    app.model(newModel);
  }
  return newNamespace;
};

/**
 * @description 获取dva的redux store
 */
export const getDva = () => {
  return {...app, modelExtend: modelExtend};
};

/**
 * @description 获取dva的redux store
 */
export const getDvaStore = () => {
  return store;
};

/**
 * @description: dva dispatch 解决回调调用的问题
 */
 export const dispatch = (...arg) => {
    getDvaStore().dispatch(...arg);
  };

/**
 * @description 创建dva
 * @param {*} options dva 配置参数。参数链接: https://dvajs.com/api/#app-dva-opts
 */
export const createDva = (options) => {
  // 1、创建dva实例
  app = create(options);
  app.use(createLoading())

  // 2、装载model
  options.models.forEach((o) => {
    app.model(o);
    // models[o.namespace] = _.cloneDeep(o);
  });

  // 3、实例初始化
  app.start();

  // 4、获取redux的store对象
  store = app._store;

  // 5、注入redux
  const start = (container) => (
    <Provider store={store}>{container}</Provider>
  );

  return {start};
};

//判断模块是否已经存在
const isHasModels = function (namespace) {
  let res = app?._models.some(function (val) {
    if (val.namespace === namespace) {
      return true; //当内部return true时跳出整个循环
    }
  });

  return res;
};