const express = require('express');
const router = express.Router();
const authenticate = require('../middleware/authenticate');
const { postJob, getAllJobs, getEmployerJobs, getJobById } = require('../controllers/jobController');

router.post('/post', authenticate, postJob);
router.get('/get', authenticate, getAllJobs);
router.get('/getemployerjobs', authenticate, getEmployerJobs);
router.get('/get/:id', authenticate, getJobById);

module.exports = router;
