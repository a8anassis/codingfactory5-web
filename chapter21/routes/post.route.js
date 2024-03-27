const express = require('express')
const router = express.Router()

const postController = require('../controllers/post.controller')

router.get('/', postController.findAll);
router.get('/:id', postController.findOne);
router.post('/', postController.create);
// router.patch('/:id', postController.update);
// router.delete('/:id', postController.delete);

module.exports = router;