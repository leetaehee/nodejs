const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    //res.render('index');
    res.render('socket_io');
});

module.exports = router;