const express = require('express');
const router = express.Router();
const { register, login, logout, updateProfile } = require('../controllers/authController');
const authenticate = require('../middleware/authenticate');
const { singleUpload } = require('../middleware/multer');

router.post('/register', singleUpload, register);
router.post('/login', login);
router.post('/logout', logout);
router.put('/profile/update', authenticate, singleUpload, updateProfile);

module.exports = router;
