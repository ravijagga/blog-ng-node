const express = require('express');
const router = express.Router();
const usersController = require('./users.controller');
const { userAuth, adminAuth } = require('../auth/auth.middleware');
const { commonMiddleware } = require('../common');
const CustomError = require('../error/custom.error');
const path = require('path');
const multer = require('multer');

// Configure Multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '_' + Date.now() + path.extname(file.originalname));
  }
});
const upload = multer({ storage: storage });

// Our Routes
router.route('/')
  .get(usersController.getUsersByPage)
  .post(upload.single('profileImg'), usersController.saveUser);

router.route('/me')
  .get(userAuth, usersController.getLoggedInUser)
  .put(userAuth, usersController.updateMyProfile);

router.param('id', commonMiddleware.processIdParam);

router.route('/:id')
  .get(usersController.getUserById)
  .put([userAuth, adminAuth], usersController.getUserByIdAndUpdateForAdmin)
  .delete([userAuth, adminAuth], usersController.deleteUserById);

module.exports = router;