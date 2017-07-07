'use strict'

var fs = require('fs')

var dataBuffer = null
var file = __dirname + '/../data/phone.dat'

var load = function () {
  dataBuffer = fs.readFileSync(file)
}

var find = function (mobile) {
  var mob = checkMobile(mobile)
  if (!mob) {
    return false
  }
  var buffer = new Buffer(mob)
  var br = new Buffer('\n')
  var start = dataBuffer.indexOf(buffer)
  if (start >= 0) {
    var str = dataBuffer.toString('utf-8', start, dataBuffer.indexOf(br, start))
    if (str) {
      return parse(str, mobile)
    }
  }
  return false
}

var checkMobile = function (mobile) {
  var reg = /^1[3-9]{1}[0-9]{9}$/
  if (reg.test(mobile)) {
    return mobile.substring(0, 7)
  }
  return false
}

var parse = function (str, mobile) {
  var arr = str.split(',')
  return {
    prefix: arr[0].substring(0, 3),
    mobile: mobile,
    province: arr[1],
    city: arr[2],
    isp: arr[3],
    code: arr[4],
    zipcode: arr[5],
    types: arr[6]
  }
}

module.exports = function (mobile) {
  if (dataBuffer === null) {
    load()
  }
  return find(mobile)
}