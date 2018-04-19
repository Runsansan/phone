import service from './index'
export default{
  login (params, callback) {
    service.post('/app/login', params, callback)
  },
  loginCode (params, callback) {
    service.get('/app/login/code/' + params, callback)
  },
  loginPhone (params, callback) {
    service.post('/app/loginPhone', params, callback)
  },
  indexIfExistMemberByPhone (params, callback) {
    service.get('/app/verify/indexIfExistMemberByPhone' + params, callback)
  },
  indexSendVerifySMS (params, callback) {
    service.get('/app/verify/indexSendVerifySMS' + params, callback)
  },
  indexVerifySMS (params, callback) {
    service.get('/app/verify/indexVerifySMS' + params, callback)
  },
  indexChangePassword (params, callback) {
    service.post('/app/verify/indexChangePassword', params, callback)
  },
  getAllSysOrg (params, callback) {
    service.get('/app/org/getAllSysOrg', params, callback)
  },
  out (params, callback) {
    service.get('/app/login/out', params, callback)
  },
  getPhoneYzm (params, callback) {
    service.get('/app/regist/code/' + params, callback)
  },
  getMemberBaseInfo (params, callback) {
    service.get('/app/member/getMemberBaseInfo' + params, callback)
  },
  updateBaseInfo (params, callback) {
    service.post('/app/member/updateBaseInfo', params, callback)
  }}
