const express = require('express');
const {index} = require('../controllers/indexController');
const {detail} = require('../controllers/indexController');
const router = express.Router();

/* / */
router
    .get('/', index)
    .get('/detalle/:id', detail)

module.exports = router;