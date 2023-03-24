const express = require('express');
const {
    createUser, 
    updateUser, 
    loginUser, 
    logOut,
    forgotPassword,
    resetPassword
} = require('../controllers/userControllers');
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");


// creating router
const router = express.Router();

router.post('/new', createUser);
router.put('/',isAuthenticatedUser, updateUser);
router.post('/login', loginUser);
router.get('/logout', isAuthenticatedUser, logOut);
router.post('/password/forgot', forgotPassword);
router.put('/password/reset/:token', resetPassword);

module.exports = router;