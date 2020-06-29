const express = require('express')
const router = express.Router()
const db = require('../db')

router.get('/', (req, res) => {
    res.send('something saying I\'m here or whatever in quotes')
})

router.get('/:id', (req, res) => {
    const id = req.params.id
    db.query(`SELECT * FROM reviews WHERE id = ${id}`, (err, results) => {
        if(err){
            res.status(500).end()
        } else {
            res.status(200).json(results.rows)
        }
    })
})


module.exports = router