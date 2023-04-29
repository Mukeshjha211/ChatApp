const express = require('express');

const router = express.Router();

const controller = require('../controller/chat');

router.post('/user/chat', controller.chat)

router.get('/user/get-chat', controller.getChat)

module.exports = router;