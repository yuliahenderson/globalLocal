const express = require('express');
const SubscriberController = require('../controllers/subscriberController');

const router = express.Router();

router.get('/', SubscriberController.getAll);
router.get('/:id', SubscriberController.getOne);

module.exports = router;
