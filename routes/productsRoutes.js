const express = require('express');
const controllers = require('../controllers/productsControllers');

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/:id', controllers.getById);

module.exports = router;