const express = require('express')
const routes = express.Router();
const views = require('../views')

routes.get('/', (req, res) => {
    res.send('A')
})

routes.post('/', (req, res) => {
    res.send('B')
})

routes.get('/add', (req, res) => {
    res.send(views.addPage())
})

module.exports = routes;

