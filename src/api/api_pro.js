import * as API from './index'

export default {
  getProduct: params => {
    return API.GET('/productlist.php',params)
  },
  register: params => {
    return API.GET('/reg.php', params)
  },
  login: params => {
    return API.GET('/login.php', params)
  }
}
