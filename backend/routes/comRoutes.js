const express = require('express');
const router = express.Router();
const { registerCompany, getCompany, getCompanyById, updateCompany } = require('../controllers/comController');
const authenticate = require('../middleware/authenticate');
const { singleUpload } = require('../middleware/multer');

router.post('/register', authenticate, registerCompany);
router.get('/get', authenticate, getCompany);
router.get('/get/:id', authenticate, getCompanyById);
router.put('/update/:id', authenticate, singleUpload, updateCompany);

module.exports = router;
