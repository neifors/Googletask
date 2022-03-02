const express = require('express')
const router = express.Router()
const path = require('path')

const Result = require('../models/models')

router.use(express.static('google-search'));

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../google-search', 'index.html'));
});

router.get('/:keyword', (req, res) => {
    try {
        const searchKeyword = req.params.keyword;
        const searchedItem = Result.findByKeyword(searchKeyword)
        res.send(searchedItem)
    } catch (err) {
        res.status(404)
        res.send(err.message)
    }
});

module.exports = router
