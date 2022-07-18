
const express = require('express');
const router = express.Router();

const home = require('../controller/index-con')


router.get('/',home.home);


module.exports = router;