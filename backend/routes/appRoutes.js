const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const { applyJob, getAppliedJobs, getApplicants, updateStatus } = require('../controllers/appController');

router.get('/apply/:id', authenticate, applyJob);
router.get('/get', authenticate, getAppliedJobs);
router.get('/:id/applicants', authenticate, getApplicants);
router.put('/status/:id/update', authenticate, updateStatus);

module.exports = router;
