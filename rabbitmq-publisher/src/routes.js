const express = require('express');
const router = express.Router();

const {messageController} = require('./controller/messageController');

router.get('/', (req, res) => {
    res.status(200).send("Hello World")
});

router.post('/save-data', messageController);
module.exports = router