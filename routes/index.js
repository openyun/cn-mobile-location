'use strict'

var express = require('express')
var router = express.Router()
var json = require('../libs/json')

router.get('/', function(req, res, next) {
  res.jsonp(json(0, `not allowed.`))
})

module.exports = router
