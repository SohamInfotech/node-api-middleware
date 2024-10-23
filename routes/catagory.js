const express = require('express')
const router = express.Router()

var CC=require('../controller/catagorycontroller')
var MM= require('../middleware/authcheck')
router.get('/', MM.checkToken, CC.getcatagory)

module.exports=router