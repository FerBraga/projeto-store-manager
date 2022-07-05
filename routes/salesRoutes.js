const express = require('express');
const salesValidation = require('../middlewares/salesValidation');
const controllers = require('../controllers/salesControllers');

const router = express.Router();

router.post('/', salesValidation.authSales, controllers.insertSales);

module.exports = router;