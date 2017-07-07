'use strict'

module.exports = function (status, message, data) {
  return {
    status: status,
    message: message,
    data: !data ? {} : data,
    timestamp: Date.parse(new Date()) / 1000
  }
}
