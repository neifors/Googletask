const express = require('express')
const router = express.Router()
const searchData = require('../../data')

const Result = require('../models')

router.get('/', (req, res) => {
    res.send(searchData.searchList)
});

router.get('/:keyword', (req, res) => {
    try {
        const searchKeyword = req.params.keyword;
        const searchedItem = Result.findByKeyword(searchKeyword)
        if ((searchedItem == null) || (searchedItem.length == 0)) throw new Error ("Sorry search word didn't return any results.")
        res.send(searchedItem)
    } catch (err) {
        res.status(404)
        res.send(err.message)
    }
});

router.get('/random/:keyword', (req, res) => {
    try {
        const searchKeyword = req.params.keyword;
        const searchedItem = Result.findByKeyword(searchKeyword)
        const randomInt = Math.floor(Math.random() * searchedItem.length)
        if ((searchedItem == null) || (searchedItem.length == 0)) throw new Error ("Sorry search word didn't return any results.")
        res.send(searchedItem[randomInt])
    } catch (err) {
        res.status(404)
        res.send(err.message)
    }
});

module.exports = router
