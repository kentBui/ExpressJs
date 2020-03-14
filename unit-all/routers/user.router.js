var express = require('express');
var router = express.Router();

var controller = require('../controllers/user.controller');

router.get('/', controller.index);

router.get('/search', controller.search);

router.get('/create', controller.create);

router.get('/users/delete', controller.delete);

router.get('/:id', controller.view);

router.post('/create', controller.postCreate);

router.post('/delete', controller.postDelete);

module.exports = router;