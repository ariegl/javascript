const express = require('express');
const TaskController = require('../controllers/TaskController');

const router = express.Router();

router.get('/tasks',TaskController.index);
router.get('/creates',TaskController.create);

module.exports = router;