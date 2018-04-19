
export default {
  // 设置cookie
  setCookie: function (cName, value, expiremMinutes) {
    var exdate = new Date()
    exdate.setTime(exdate.getTime() + expiremMinutes * 60 * 1000)
    document.cookie = cName + '=' + escape(value) + ((expiremMinutes === null) ? '' : ';expires=' + exdate.toGMTString())
  },
// 读取cookie
  getCookie: function (cName) {
    if (document.cookie.length > 0) {
      var cStart = document.cookie.indexOf(cName + '=')
      if (cStart !== -1) {
        cStart = cStart + cName.length + 1
        var cEnd = document.cookie.indexOf(';', cStart)
        if (cEnd === -1) {
          cEnd = document.cookie.length
        }
        return unescape(document.cookie.substring(cStart, cEnd))
      }
    }
    return ''
  },

// 删除cookie
  delCookie: function (cName) {
    var exp = new Date()
    exp.setTime(exp.getTime() - 1)
    var cval = this.getCookie(cName)
    if (cval !== null) {
      document.cookie = cName + '=' + cval + ';expires=' + exp.toGMTString()
    }
  }
}
