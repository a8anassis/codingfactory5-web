const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/category.controller');

router.get('/', categoryController.findAll);
router.get('/:id', categoryController.findOne)
router.post('/', categoryController.create);
router.patch('/:id', categoryController.update)
router.delete('/:id', categoryController.delete)

module.exports = router;