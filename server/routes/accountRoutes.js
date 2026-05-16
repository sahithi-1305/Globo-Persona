const express = require('express');
const router = express.Router();
const {
  createAccount,
  getAccounts,
  toggleAccount
} = require('../controllers/accountController');

router.route('/')
  .post(createAccount)
  .get(getAccounts);

router.route('/:id/toggle')
  .patch(toggleAccount);

module.exports = router;
