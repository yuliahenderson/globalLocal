const express = require('express');
const DestinationController = require('../controllers/destinationController');

const router = express.Router();

router.get('/', DestinationController.getAllOfCurrentUser);
router.post('/', DestinationController.create);
router.delete('/:id', DestinationController.delete);

module.exports = router;
