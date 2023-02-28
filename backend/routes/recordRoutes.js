const express = require('express');
const { getRecords, postRecord } = require('../controllers/RecordControllers');
const router = express.Router();

router.get('/', getRecords);
router.post('/', postRecord);

module.exports = router;