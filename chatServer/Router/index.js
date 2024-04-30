const express = require('express');
const router = express.Router();
const chatcontroller = require('../Controller/chat');

router.get('/',chatcontroller.chat);

module.exports = router;