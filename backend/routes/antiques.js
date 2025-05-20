const express = require('express');
const router = express.Router();
const antiquesController = require('../controllers/antiquesController');

router.get('/', antiquesController.getAllAntiques);
router.get('/:id', antiquesController.getAntiqueById);
router.post('/', antiquesController.createAntique);
router.put('/:id', antiquesController.updateAntique);
router.delete('/:id', antiquesController.deleteAntique);

module.exports = router;