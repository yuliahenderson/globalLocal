const express = require('express');
const CurratorController = require('../controllers/curratorController');

const router = express.Router();

router.get('/', CurratorController.getAll);
router.get('/:id', CurratorController.getOne);

module.exports = router;
