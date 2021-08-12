/*
 * @Description: 
 * @Author: alon
 * @Date: 2021-08-12 10:12:36
 * @LastEditTime: 2021-08-12 10:52:49
 * @LastEditors: alon
 */
export const env = 'dev'; // dev：开发,test 测试, product：生产
const appConfigs = {
    dev: {
      baseUrl: 'https://dev-february.whispark.com',
      websokectUrl: 'https://dev-ws-february.whispark.com/', //'',
      baseImageUrl: 'https://pokalive-dev.oss-cn-hongkong.aliyuncs.com/',
    },
    test: {
      baseUrl: 'https://test-api.pokalive.com/',
      websokectUrl: 'https://test-chat.pokalive.com/',
      baseImageUrl: 'https://pokalive-test.oss-cn-hongkong.aliyuncs.com/',
    },
    product: {
      baseUrl: 'https://test-api.pokalive.com/',
      websokectUrl: 'https://test-chat.pokalive.com/',
      baseImageUrl: 'https://pokalive-pro.oss-cn-hongkong.aliyuncs.com/',
    },
  };

  export const HTTP_STATUS = {
    SUCCESS: 200,
    CREATED: 201,
    ACCEPTED: 202,
    CLIENT_ERROR: 400,
    AUTHENTICATE: 401,
    FORBIDDEN: 403,
    NOT_FOUND: 404,
    SERVER_ERROR: 500,
    BAD_GATEWAY: 502,
    SERVICE_UNAVAILABLE: 503,
    GATEWAY_TIMEOUT: 504
  }

export const BASE_URL = appConfigs[env].baseUrl;