const express = require('express');
const salesValidation = require('../middlewares/salesValidation');
const controllers = require('../controllers/salesControllers');

const router = express.Router();
router.get('/', controllers.getAll);
router.get('/:id', controllers.getById);
router.post('/', salesValidation.authSales, controllers.insertSales);

module.exports = router;