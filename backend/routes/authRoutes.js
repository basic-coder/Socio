const { sendOtp } = require('../controllers/authController');
const router = require('express').Router();

router.post('/api/send-otp',sendOtp)

module.exports = router;