"use strict"

var express = require('express')
var router = express.Router()
var json = require('../libs/json')
var finder = require('../libs/finder')

router.all('/:mobile', function(req, res, next) {
  var data = finder(req.params.mobile)
  if (!data) {
    res.jsonp(json(0, 'not found'))
  } else {
    res.jsonp(json(0, 'success', data))
  }
  
})

module.exports = router
