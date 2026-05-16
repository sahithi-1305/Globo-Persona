const Account = require('../models/Account');

// @desc    Create new account
// @route   POST /api/accounts
exports.createAccount = async (req, res) => {
  try {
    const { email, dailyLimit, reputation } = req.body;

    // Check if account already exists
    const existingAccount = await Account.findOne({ email });
    if (existingAccount) {
      return res.status(400).json({
        success: false,
        message: 'Account with this email already exists'
      });
    }

    const account = await Account.create({
      email,
      dailyLimit,
      reputation
    });

    res.status(201).json({
      success: true,
      data: account
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};

// @desc    Get all accounts
// @route   GET /api/accounts
exports.getAccounts = async (req, res) => {
  try {
    const accounts = await Account.find().sort({ createdAt: -1 });
    res.status(200).json({
      success: true,
      count: accounts.length,
      data: accounts
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Server Error'
    });
  }
};

// @desc    Toggle account enabled status
// @route   PATCH /api/accounts/:id/toggle
exports.toggleAccount = async (req, res) => {
  try {
    const account = await Account.findById(req.params.id);

    if (!account) {
      return res.status(404).json({
        success: false,
        message: 'Account not found'
      });
    }

    account.enabled = !account.enabled;
    await account.save();

    res.status(200).json({
      success: true,
      data: account
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: 'Invalid ID or Server Error'
    });
  }
};
