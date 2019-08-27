import * as API from './index'

export default {
  //注册接口
  register: params => {
    return API.GET('/reg.php', params)
  },
  //登录接口
  login: params => {
    return API.GET('/login.php', params)
  },
  //获取列表接口
  product: params => {
    return API.GET('/productlist.php', params)
  }
}
