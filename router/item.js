const express = require('express')
const router = express.Router()
const {AllItems,ItemsTest} =require('../controller/items')

router.route('/').get(AllItems)
router.route('/test').get(ItemsTest)

module.exports =router;