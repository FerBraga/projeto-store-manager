const express = require('express');
const controllers = require('../controllers/productsControllers');
const authName = require('../middlewares/nameValidation');

const router = express.Router();

router.get('/', controllers.getAll);

router.get('/:id', controllers.getById);

router.post('/', authName, controllers.insert);

router.put('/:id', authName, controllers.update);

module.exports = router;