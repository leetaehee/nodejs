const express = require('express');

const router = express.Router();

// GET /user 라우터
router.get('/', (req, res) => {
    res.send('Hello, User');
});

router.get('/:id', (req, res) => {
    console.log(req.ip);
    console.log(req.params);
    res.send("패턴실습");
});

module.exports = router;