var express = require('express');
var router = express.Router();

let UC = require('../controller/User')

router.post('/createdata', UC.createdata)
router.get('/showdata', UC.showdata)
router.delete('/deletedata/:id', UC.deletedata)
router.patch('/editdata/:id', UC.editdata)
router.post('/userlogin', UC.userlogin)
module.exports = router;
